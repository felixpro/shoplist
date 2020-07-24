var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const items = require('./routes/api/items')
const ejs = require('ejs')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// DB config
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("db connected"))
  .catch((err) => console.log("db is not connected  " + err))



// routes
app.use('/api/items', items)


// server
app.listen(3000);

module.exports = app;
