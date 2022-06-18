
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");
// var passport = require("passport");
var bodyParser = require("body-parser");
var session = require('express-session');
// var LocalStrategy = require("passport-local");
var User = require("./models/userModel");
var connectEnsureLogin = require('connect-ensure-login');

// Routes
const aboutRoutes = require('./routes/about')
const servicesRoutes = require('./routes/services')
const projectsRoutes = require('./routes/projects')
const contactRoutes = require('./routes/contact')
const indexRoutes = require('./routes/index');
const loginRoutes = require('./routes/login');
const updateRoutes = require('./routes/update');
const deleteRoutes = require('./routes/delete');

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({
  secret: "node js mongodb",
  resave: false,
  saveUninitialized: false
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

const user = {
    firstName: 'Jay',
    lastName: 'Patel',
}

app.use('/', indexRoutes);
app.use('/about', aboutRoutes)
app.use('/services', servicesRoutes)
app.use('/projects', projectsRoutes)
app.use('/contact', contactRoutes)
app.use('/login', loginRoutes)
app.use('/update', updateRoutes)
app.use('/delete', deleteRoutes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  
  module.exports = app;
  
