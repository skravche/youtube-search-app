const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const ObjectID = mongo.ObjectID;

const url = 'mongodb://localhost:3333';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) throw err;

  const db = client.db('testdb');

  let doc = { _id: new ObjectID(), title: 'vid3', text: 'about...' };

  db.collection('vids')
    .insertOne(doc)
    .then(doc => {
      console.log('add!');
      console.log(doc);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      client.close();
    });
});
