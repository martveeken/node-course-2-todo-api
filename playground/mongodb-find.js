//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('unable to connect to MongoDB');
  }
  console.log('Connected to MongoDB server!');

  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectId('5c324bba25d6263b2dc97636')
  // }).toArray()
  //   .then((docs) => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   }, (error) => {
  //     console.log('Unable to fetch', error);
  //   });

  // db.collection('Todos').find().count()
  //   .then((count) => {
  //     console.log(`Count ${count}`);
  //   }, (error) => {
  //     console.log('Unable to fetch', error);
  //   });

  db.collection('Users').find({ name: 'Deir' }).toArray()
    .then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
    }, (error) => {
      console.log('Unable to fetch', error);
    });
});
