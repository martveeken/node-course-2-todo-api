//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

const obj = new ObjectId();

console.log(obj);
console.log(obj.getTimestamp());

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('unable to connect to MongoDB');
  }
  console.log('Connected to MongoDB server!');

  const db = client.db('TodoApp');


  // db.collection('Todos').insertOne({
  //   text: 'Todo two',
  //   completed: false
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert Todo', error);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Deir',
  //   age: 27,
  //   location: 'Amsterdam'
  // }, (error, result) => {
  //     if (error) {
  //       return console.log('Unable to insert Todo', error);
  //     }
  //     console.log(result.ops[0]._id.getTimestamp());
  // });

  client.close();
});
