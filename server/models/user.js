const mongoose = require('mongoose');

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minLength: 1
  },
  location: {
    type: String,
    default: null
  }
});

module.exports = { User };
