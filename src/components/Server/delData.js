const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:3333';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) throw err;

  const db = client.db('testdb');

  let query = { name: '' };

  db.collection('vids')
    .deleteOne(query)
    .then(result => {
      console.log('item deleted');
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      client.close();
    });
});
