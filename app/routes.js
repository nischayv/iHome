//In larger apps this can be separated into multiple modules
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');
var passport = require('passport');
var User = mongoose.model('User');

// return homepage for angular front end
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

//routes for authentication
router.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

// handle the callback after facebook has authenticated the user
router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect : '/home',
        failureRedirect : '/login'
}));

module.exports = router;


