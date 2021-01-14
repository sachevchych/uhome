const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  login: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  type: {
    type: String,
    default: 'customer'
  }
});

module.exports = (mongoose.models && mongoose.models.User ? mongoose.models.User : mongoose.model('User', userSchema));
