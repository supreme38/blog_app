// REQUIREMENTS
var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    session = require('express-session'),
    app = express(),
    port = 3000 || process.env.PORT;
