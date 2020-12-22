const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
  _id: Number,
  status: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  },
  contacts: {
    name: String,
    surname: String,
    middleName: String,
    phone: String,
    email: String,
  },
  cart: [{
   product: {
     type: Schema.Types.ObjectId,
     ref: 'Product'
   },
    amount: Number,
    price: Number
  }],
  delivery: {
    city: String,
    company: String,
    deliveryType: String,
    department: String,
    address: String,
  },
  payment: {
    paymentType: String,
    paidFor: Number
  }
})

module.exports = mongoose.model('Order', orderSchema)
