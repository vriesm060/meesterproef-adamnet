// modules laden (express als framework)
var express = require('express');
var app = express();

// Require .env files:
require('dotenv').config({ path: './vars.env' });

// view engine setup > templates weergeven
app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

// Require routes:
var routes = require('./routes');

// Use routes:
app.use('/', routes);

//run
app.listen(process.env.PORT);
