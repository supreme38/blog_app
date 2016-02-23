// REQUIREMENTS
var express = require('express'),
    router = express.Router();

// MODELS
var User = require('../models/users'),
    Blog = require('../models/blogs');

// INDEX
router.get('/', isLoggedIn, function(req, res) {
  Blog.find(function(err, blogs) {
    res.render('blogs/index.ejs', { blogs: blogs });
  });
});

// MIDDLEWARE - LOGIN STATUS
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/users');
  };
};

// EXPORT
module.exports = router;
