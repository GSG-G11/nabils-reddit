const { join } = require('path');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const router = require('./routes');
const { notFound, serverError } = require('./controllers');

const app = express();

app.disable('x-powered-by');

app.set('port', process.env.PORT || 3000);
app.use([
  express.json(),
  express.urlencoded({ extended: true }),
  cookieParser(),
  compression(),
  express.static(join(__dirname, '../views')),
  router,
  notFound,
  serverError,

]);
module.exports = app;
