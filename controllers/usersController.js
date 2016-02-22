// REQUIREMENTS
var express = require('express'),
    passport = require('passport'),
    router = express.Router();

// MODELS
var User = require('../models/users'),
    Brand = require('../models/brands');

// INDEX
router.get('/', function(req, res) {
		res.render('users/index.ejs');
	});

// EXPORT
module.exports = router;
