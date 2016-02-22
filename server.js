// REQUIREMENTS
var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    session = require('express-session'),
    app = express(),
    port = 3000 || process.env.PORT;


// CONTROLLERS
usersController = require('./controllers/usersController');
brandsController = require('./controllers/brandsController');

// MIDDLEWARE
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ name: 'fit_check_auth_app', secret: 'hypebeast' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use('/users', usersController);
app.use('/brands', brandsController);

// REDIRECT ROUTE
app.get('/', function(req, res){
  res.redirect('/users');
});

// CONNECT & LISTEN
mongoose.connect('mongodb://localhost:27017/fit_check');
app.listen(port, function() {
    console.log('LISTEN TO ME ON PORT ' + port);
});
