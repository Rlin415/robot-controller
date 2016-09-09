const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const controllers = require('./controllers');
const twilio = require("twilio");

const app = express();

app.use(bodyParser.json());
app.use(express.static('client'));
app.use(morgan('dev'));

app.set('port', 3000);

app.use('/api', controllers);

app.listen(app.get('port'), function() {
  console.log('Server listening on port', app.get('port'));
});