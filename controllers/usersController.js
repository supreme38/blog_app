// REQUIREMENTS
var express = require('express'),
    passport = require('passport'),
    router = express.Router();

// MODELS
var User = require('../models/users'),
    Blog = require('../models/blogs');

// JSON
router.get('/json', function(req, res) {
	User.find(function(err, users) {
		res.send(users);
	});
});

// JSON - USER SPECIFIC
router.get('/:id/json', function(req, res) {
	User.findById(req.params.id, function(err, user) {
		res.send(user);
	});
});

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
router.post('/:id/newblog', function(req, res) {
  User.findById(req.params.id, function(err, user) {
		var blog = new Blog(req.body);
		blog.save(function(err, blog) {
			user.blogs.push(blog);
			user.save(function(err, user) {
				res.redirect('/users');
			});
		});
	});
});

// UPDATE
router.put('/:id', function(req, res){
  User.update({_id: req.params.id, 'blogs._id': req.body.update_id}, {$set: {'blogs.$.comments': req.body.comments}}, function(err) {
    res.redirect('/users');
    });
  });

// DELETE
router.delete('/:id/newblog', function(req, res){
  User.findById(req.params.id, function(err,user){
    user.blogs.forEach(function(blog) {
    Blog.findOneAndRemove({ _id: blog.id }, function(err) {
      if (err) console.log(err);
    });
   });
   user.blogs.id(req.body.blogs_id).remove();
   user.save(function(){
     res.redirect('/users/');
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
