var logger = require('./modules/utils/logger.js');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

/*Express Router
GET Request
Post Request
*/

var contacts = require('./modules/routes/contacts.js');
app.use('/contacts', contacts);

logger.info('Starting the server');

var server = app.listen(3333, function() {
  logger.info('Server started...');
});
