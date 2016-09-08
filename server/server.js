const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const controllers = require('./controllers');
const twilio = require("twilio");
const config = require("../config.js");

const app = express();

// const client = new twilio.RestClient(config.SID, config.AuthToken);
//
// client.messages.create({
//   body: 'Hello from Node',
//   to: '+14155330862',  // Text this number
//   from: '+16504886599',
//   media_url: "__dirname" + "dog_picture.jpg"// From a valid Twilio number
// }, function(err, message) {
//   if (err) return console.error(err);
//   console.log(message.sid);
// });

app.use(bodyParser.json());
app.use(express.static('client'));
app.use(morgan('dev'));

app.set('port', 3000);

app.use('/api', controllers);

app.listen(app.get('port'), function() {
  console.log('Server listening on port', app.get('port'));
});