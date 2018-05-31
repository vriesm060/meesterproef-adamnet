// modules laden (express als framework)
var express = require('express');
var app = express();

// Require .env files:
require('dotenv').config({ path: './vars.env' });

// view engine setup > templates weergeven
app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

//de routes defineren (zelfde structuur als mappen)
var indexRouter = require('./routes/index');
var detailRouter = require('./routes/detail');

// connect routers to routes, weblinkjes
app.use('/', indexRouter);
app.use('/detail', detailRouter);

//run
app.listen(process.env.PORT);
