//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('unable to connect to MongoDB');
  }
  console.log('Connected to MongoDB server!');

  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectId('5c324bba25d6263b2dc97636')
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // })
  // .then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectId('5c325cdf25d6263b2dc97f01')
  }, {
    $set: { name: 'Joop' }, $inc: { age: 1 }
  })
  .then((result) => {
    console.log(result);
  });
});
