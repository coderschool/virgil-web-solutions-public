var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors")
require("dotenv").config()

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use((req, res, next) => {
    const err = new Error("Not found")
    err.statusCode = 404
    next(err)
})

app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.statusCode).send(err.message)
})

module.exports = app;
