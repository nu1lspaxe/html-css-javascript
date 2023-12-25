var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

// set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://nu1lspaxeanonym0ux:jlhPhG3At54A9BdB@library.zcdkipu.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoDB);  // connect to mongoDB (according to link)
mongoose.Promise = global.Promise; // set mongoose's Promise is synchronized as global's(Node.js) Promise
var DB = mongoose.connection; // var DB as listening object(connection)
DB.on("error", console.error.bind(console, "MongoDB connection error: "));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// add middleware libraries into request chain
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));  // import third side library

// import router
app.use('/', indexRouter);

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
