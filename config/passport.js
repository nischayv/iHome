var FacebookStrategy = require('passport-facebook').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');
var auth = require('../config/auth');

module.exports = function(passport) {

    // used to serialize the user for the session
    passport.serializeUser(function(user, cb) {
        cb(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use(new FacebookStrategy({
        
            // pull in our app id and secret from our auth.js file
            clientID        : auth.facebookAuth.clientID,
            clientSecret    : auth.facebookAuth.clientSecret,
            callbackURL     : auth.facebookAuth.callbackURL
        },

        // facebook will send back the token and profile
        function(token, refreshToken, profile, cb) {

            // asynchronous
            process.nextTick(function() {

                // find the user in the database based on their facebook id
                User.findOne({ 'facebook.id' : profile.id }, function(err, user) {

                    // if there is an error, stop everything and return that
                    if (err) {
                        return cb(err);
                    }

                    // if the user is found, then log them in
                    if (user) {
                        return cb(null, user); // user found, return that user
                    } else {
                        // if there is no user found with that facebook id, create them
                        var newUser = new User();

                        // set all of the facebook information in our user model
                        newUser.facebook.id    = profile.id;
                        newUser.facebook.token = token;
                        if(!profile.name.givenName && !profile.name.familyName) {
                            newUser.facebook.name  = profile.displayName;
                        }
                        else {
                            newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName;
                        }
                        console.log(profile);
                        //newUser.facebook.email = profile.emails[0].value;

                        // save our user to the database
                        newUser.save(function(err) {
                            if (err){
                                throw err;
                            }
                            return cb(null, newUser);
                        });
                    }
                });
            });
        }));
};