var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');

var app = express();

// Uncomment after adding favicon in images folder
// app.use(favicon(path.join(__dirname, 'public/images', 'favicon.png')));

var db = require('./config/db');
require('./app/model/User');
require('./config/passport');

// set our port
var port = process.env.PORT || 8080;

mongoose.connect(db.url);

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));
app.use(session({ secret: 'p*.zt[[/Wlb#2x3', saveUninitialized: true, resave: true })); // session secret
app.use(passport.initialize());
app.use(passport.session());

// routes
var routes = require('./app/routes');
app.use('/', routes);

//start app at localhost:8080
app.listen(port);
console.log('Listening on  port ' + port);

exports = module.exports = app;
