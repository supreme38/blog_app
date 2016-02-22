// REQUIREMENTS
var express = require('express'),
    passport = require('passport'),
    router = express.Router();

// MODELS
var User = require('../models/users'),
    Brand = require('../models/brands');

// INDEX
router.get('/', function(req, res) {
	res.locals.login = req.isAuthenticated();
	User.find(function(err, users) {
		res.render('users/index.ejs', { users: users });
	});
});

// LOGOUT
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/users');
});

// CREATE
router.post('/', passport.authenticate('local-signup', {
	failureRedirect: '/users' }), function(req, res) {
    res.redirect('/users/' + req.user.id);
});

// LOGIN
router.post('/login', passport.authenticate('local-login', {
	failureRedirect: '/users' }), function(req, res) {
    res.redirect('/users/' + req.user.id);
});

// MIDDLEWARE - Login Status
function isLoggedIn(req, res, next) {
	console.log('isLoggedIn middleware');
  if (req.isAuthenticated()) {
  	return next();
  } else {
  	res.redirect('/users');
  };
};

// EXPORT
module.exports = router;
