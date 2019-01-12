const { ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');
const { Todo } = require('./../../models/todo');
const { User } = require('./../../models/user');

const userOneId = new ObjectId();
const userTwoId = new ObjectId();
const token = jwt.sign({
  _id: userOneId.toHexString(), access: 'auth'
  }, process.env.JWT_SECRET).toString();
const tokenTwo = jwt.sign({
  _id: userTwoId.toHexString(), access: 'auth'
  }, process.env.JWT_SECRET).toString();

const users = [{
  _id: userOneId,
  email: 'mart@example.com',
  password: 'userOnePass',
  tokens: [{
    access: 'auth',
    token
  }]
}, {
  _id: userTwoId,
  email: 'kees@example.com',
  password: 'userTwoPass',
  tokens: [{
    access: 'auth',
    token: tokenTwo
  }]
}];

const dummyTodos = [
  {
    _id: new ObjectId(),
    text: 'First test todo',
    completed: false,
    _creator: userOneId
  }, {
    _id: new ObjectId(),
    text: 'Second test todo',
    completed: true,
    completedAt: 333,
    _creator: userTwoId
  }
];

const populateTodos = (done) => {
  Todo.deleteMany({}).then(() => {
    return Todo.insertMany(dummyTodos);
  }).then(() => done());
};

const populateUsers = (done) => {
  User.deleteMany({}).then(() => {
    const userOne = new User(users[0]).save();
    const userTwo = new User(users[1]).save();
    return Promise.all([userOne, userTwo]);
  }).then(() => done());
};

module.exports = { dummyTodos, populateTodos, users, populateUsers };
