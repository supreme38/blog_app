// REQUIREMENTS
var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    session = require('express-session'),
    app = express(),
    port = 3000 || process.env.PORT;
require('./config/passport')(passport);

// CONTROLLERS
usersController = require('./controllers/usersController');
blogsController = require('./controllers/blogsController');

// MIDDLEWARE
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ name: 'blog_app', secret: 'hypebeast' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));
app.use('/users', usersController);
app.use('/blogs', blogsController);

// REDIRECT ROUTE
app.get('/', function(req, res){
  res.redirect('/users');
});

// CONNECT & LISTEN
mongoose.connect('mongodb://localhost:27017/blog_app');
app.listen(port, function() {
    console.log('LISTEN TO ME ON PORT ' + port);
});
