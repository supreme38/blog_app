// REQUIREMENTS
var express = require('express'),
    router = express.Router();

// MODELS
var User = require('../models/users'),
    Brand = require('../models/brands');

// INDEX
router.get('/', isLoggedIn, function(req, res) {
  Brand.find(function(err, brands) {
    res.render('brands/index.ejs', { brands: brands });
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
