const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

const id = '5c34971fbb62df7bc36d44ff1';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('id not found');
  }
  console.log('Todo by id', todo);
}).catch((e) => console.log('error'));

const userId = '5c33b14af216ba7cb57a9b6e1';

// if (!ObjectID.isValid(id)) {
//   this.userId = '5c33b14af216ba7cb57a9b6e';
// }

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('unable to find user');
  }

  console.log(JSON.stringify(user, undefined, 2));
}, () => {
  console.log('wrong id');
});
