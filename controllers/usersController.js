// REQUIREMENTS
var express = require('express'),
    passport = require('passport'),
    router = express.Router();

// MODELS
var User = require('../models/users'),
    Brand = require('../models/brands');

// INDEX
router.get('/', redirectUser, function(req, res) {
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

// SHOW
router.get('/:id', isLoggedIn, function(req, res) {
  req.params.id == req.user.id ? res.locals.usertrue = true : res.locals.usertrue = false;
  User.findById(req.params.id, function(err, user) {
  res.render('users/show.ejs', { user: user });
	});
});

// POST
router.post('/:id/newbrands', function(req, res) {
  User.findById(req.params.id, function(err, user) {
		var brand = new Brand(req.body);
		brand.save(function(err, brand) {
			user.clothes.push(brand);
			user.save(function(err, user) {
				res.redirect('/users/' + req.params.id);
			});
		});
	});
});

// CREATE - LOGIN
router.post('/', passport.authenticate('local-signup', {
	failureRedirect: '/users' }), function(req, res) {
    res.redirect('/users/' + req.user.id);
});

// LOGIN
router.post('/login', passport.authenticate('local-login', {
	failureRedirect: '/users' }), function(req, res) {
    res.redirect('/users/' + req.user.id);
});

// MIDDLEWARE - LOGIN STATUS
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
  	return next();
  } else {
  	res.redirect('/users');
  };
};

// MIDDLEWARE - REDIRECT INDEX TO SHOW
function redirectUser(req, res, next) {
  if (req.isAuthenticated())
  res.redirect('/users/' + req.user.id);
  return next();
};

// EXPORT
module.exports = router;
