require('./config/config');
require('./db/mongoose');

// Require node modules
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');

// Import Models
const { Todo } = require('./models/todo');
const { User } = require('./models/user');
const { authenticate } = require('./middleware/authenticate');

// Set port
const port = process.env.PORT;

// Define server and MiddleWare
const app = express();
app.use(bodyParser.json());

// Todos Routes
// POST
app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET all todos
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({ todos });
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET single todo
app.get('/todos/:id', (req, res) => {
  const id = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      res.status(404).send();
    }
    res.send({ todo });
  }).catch(() => res.status(404).send());
});

// DELETE
app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      res.status(404).send();
    }
    res.send({ todo });
  }).catch(() => res.status(400).send());
});

// UPDATE
app.patch('/todos/:id', (req, res) => {
  const id = req.params.id;
  const body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectId.isValid(id)) {
    return res.status(400).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findOneAndUpdate({ _id: id }, { $set: body }).then((todo) => {
    if (!todo) {
      return res.status(400).send();
    }
    res.send({ todo });
  }).catch((e) => {
    res.status(404).send(e);
  });
});

// User Routes
// POST
app.post('/user', (req, res) => {
  const body = _.pick(req.body, ['email', 'password']);
  const user = new User(body);

  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user);
  })
  .catch((e) => {
    res.status(400).send(e);
  });
});

app.get('/users/me', authenticate, (req, res) => {
  res.send(req.user);
});

// Start server
app.listen(port, () => {
  console.log(`Started up @ port: ${port}`);
});

module.exports = { app };
