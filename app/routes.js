//In larger apps this can be separated into multiple modules
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');
var passport = require('passport');
var User = mongoose.model('User');

// var isLoggedIn = function (req, res, next) {
//
//     console.log('Is in logged in function');
//     // if user is authenticated in the session, carry on
//     if (req.isAuthenticated()) {
//         return next();
//     }
//
//     // if they aren't redirect them to the home page
//     res.redirect('/login');
// };

//routes for authentication
//authType: 'rerequest' will request again for declined permissions if needed
router.get('/auth/facebook', passport.authenticate('facebook', { authType: 'rerequest'}));

// handle the callback after facebook has authenticated the user
router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect : '/home',
        failureRedirect : '/login'
}));

router.get('/api/isLoggedIn', function(req, res) {
    console.log('testing');
    if(req.isAuthenticated()) {
        res.json(req.user);
    }
    else {
        res.json({'test': 'test'});
    }
});

router.get('/api/logout', function(req, res) {
    req.logout();
    res.redirect('/login');
});

router.get('/api/test', function(req, res) {
    res.json({'test': 'test'});
});

// return homepage for react front end
router.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

module.exports = router;


