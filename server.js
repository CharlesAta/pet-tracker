const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
var bb = require('express-busboy');

require('dotenv').config();
require('./config/database');

const app = express();


app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

bb.extend(app, { 
  upload: true
});

app.use('/api/users', require('./routes/api/users'));
app.use(require('./config/auth'));
app.use('/api/posts', require('./routes/api/posts'))

//THIS IS THE ERROR FUNCTION MIDDLEWARE
app.use(function (err, req, res, next) {
  //This will catch all errors that are passed to next from our middleware
  res.status(500).json(err);
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});