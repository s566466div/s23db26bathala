var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//Get the default connection
require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var fruitsRouter = require('./routes/fruits');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var resourceRouter = require('./routes/resource');

var app = express();
var fruits = require("./models/fruits");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/fruits', fruitsRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// We can seed the collection if needed onserver start
async function recreateDB(){
 // Delete everything
 await fruits.deleteMany();
 let instance1 = new
fruits({name:"Strawberry", color:"Red",cost:1.00});
 instance1.save().then(doc=>{
 console.log("First object saved")}
 ).catch(err=>{
 console.error(err)
 });
 let instance2 = new
fruits({name:"Pineapple", color:"Yellow",cost:0.50});
 instance2.save().then(doc=>{
 console.log("Second object saved")}
 ).catch(err=>{
 console.error(err)
 });
 let instance3 = new
fruits({name:"Orange", color:"Orange",cost:0.75});
 instance3.save().then(doc=>{
 console.log("Third object saved")}
 ).catch(err=>{
 console.error(err)
 });
}
let reseed = true;
if (reseed) {recreateDB();}

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
