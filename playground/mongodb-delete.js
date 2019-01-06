//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('unable to connect to MongoDB');
  }
  console.log('Connected to MongoDB server!');

  const db = client.db('TodoApp');

  // db.collection('Todos').deleteOne({ text: 'eat lunch' })
  //   .then((result) => {
  //     console.log(result);
  //   });

  // db.collection('Todos').findOneAndDelete({ completed: false })
  //   .then((result) => {
  //     console.log(result);
  //   });

  db.collection('Users').deleteMany({ name: 'Mart' })
    .then((result) => {
      console.log(result);
    });

  db.collection('Users').findOneAndDelete({ _id: new ObjectId('5c324a0f86a03e2b140c991f') })
    .then((result) => {
      console.log(JSON.stringify(result, undefined, 2));
    });
});
