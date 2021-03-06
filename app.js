var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
// this is the place where we will be defining all our website routes i.e. routes/index file.
var indexRouter = require("./routes/index");
var app = express();

//Environment
var isProduction = process.env.NODE_ENV === "development";

// Express EJS Extend
// Layouts support for EJS templates in Express 3+.
app.engine("ejs", require("express-ejs-extend")); // add this line

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// SET PORT
app.listen(8040);
module.exports = app;
