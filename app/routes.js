//In larger apps this can be separated into multiple modules
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');
var passport = require('passport');
var User = mongoose.model('User');

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
    if(req.isAuthenticated()) {
        res.json(req.user);
    }
    else {
        res.status(401).send('Please log in to continue');
    }
});

router.get('/api/logout', function(req, res) {
    req.logout();
    res.redirect('/login');
});

router.get('/api/test', function(req, res) {
    console.log(req);
    res.json({'test': 'test'});
});

// return homepage for react front end
router.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

module.exports = router;


