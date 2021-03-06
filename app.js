var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const connectionString = 'mongodb+srv://chaitu:Chaitu%40123@cluster0.pfe5g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose = require('mongoose');
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var IceCreamRouter = require('./routes/IceCream');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var IceCream = require("./models/IceCream");
var resourceRouter = require("./routes/resource");
var detailRouter = require("./routes/detail");
var createRouter = require("./routes/create");
var updateRouter = require("./routes/update");
var deleteRouter = require("./routes/delete");


// We can seed the collection if needed on
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function () {
  console.log("Connection to DB succeeded");
});


// We can seed the collection if needed on

async function recreateDB() {
  // Delete everything
await IceCream.deleteMany();
  let instance1 = new
  IceCream({
    IceCreamName: "Choclate",
    Price: 5,
    Quantity: 1
  });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });
  let instance2 = new IceCream({
    IceCreamName: "butterscotch",
    Price: 67,
    Quantity: 4
  });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Second object saved")
  });
  let instance3 = new IceCream({
    IceCreamName: "vanila",
    Price: 6,
    Quantity: 3
  });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third object saved")
  });
}
let reseed = true;
if (reseed) {
  recreateDB();
}


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/IceCream', IceCreamRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);
app.use('/detail', detailRouter);
app.use('/create', createRouter);
app.use('/update', updateRouter);
app.use('/delete', deleteRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;