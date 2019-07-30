var express = require('express');
var router = express.Router();
var logger = require('../utils/logger.js');
var mongoose = require('mongoose');

var customerDB = mongoose.connect('mongodb://127.0.0.1:27017/customer');

var contactSchema = mongoose.Schema(
  {
    title: 'string',
    text: 'string',
  },
  { collection: 'contacts' }
);

var Contact = mongoose.model('Contact', contactSchema);

//GET request
router.get('/', function(req, res) {
  logger.info('Retrieving data from mongodb');

  var contactDTO = [];

  Contact.find(function(err, contacts) {
    if (err) {
      res.json({ error: true });
    } else {
      for (var i = 0; i < contacts.length; i++) {
        var c = contacts[i];

        contactDTO.push({
          title: c.title,
          text: c.text,
        });
      }
      res.json(contactDTO);
    }
  });
});

//POST request
router.post('/', function(req, res) {
  logger.info('Inserting Data to mongodb');

  var reqContact = req.body;

  var c = new Contact({
    title: reqContact.title,
    text: reqContact.text,
  });

  var resMsg = { success: true };

  c.save(function(err, c) {
    if (err) {
      resMsg = { error: true };
      logger.error(err);
    }
  });

  res.json(resMsg);
});

module.exports = router;
