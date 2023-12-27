var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var compression = require('compression');
var helmet = require('helmet');

var indexRouter = require('./routes/index');
var catalogRouter = require('./routes/catalog');

var app = express(); 
app.use(helmet()); // helps secure Express apps by setting HTTP response headers.
app.disable('x-powered-by');

// Set up mongoose connection
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

var mongoose = require('mongoose');
var mongoDB = process.env.MONGODB_URI || 'mongodb+srv://<username>:<password>@library.zcdkipu.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoDB);  // Connect to mongoDB (according to link)
mongoose.Promise = global.Promise; // Set mongoose's Promise is synchronized as global's(Node.js) Promise
var DB = mongoose.connection; // DB as listening object(connection)
DB.on("error", console.error.bind(console, "MongoDB connection error: "));

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Add middleware libraries into request chain
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));  // Import third side library

app.use(compression()); //Compress all routes

// Import router
app.use('/', indexRouter);
app.use('/catalog', catalogRouter)

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
