const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
  _id: Number,
  name: {
    type: String,
    required: true
  },
  surname: String,
  phone: {
    type: String,
    required: true
  },
  email: String,
  city: String,
  company: String,
  type: String,
  department: String,
  address: String,
  payment: String,
})

module.exports = mongoose.model('Order', orderSchema)
