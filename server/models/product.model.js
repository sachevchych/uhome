const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String
  },
  active: {
    type: Boolean
  },
  price: {
    type: Number
  },
  description: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  views: {
    type: Number,
    default: 0
  },
  imageUrl: {
    type: String
  }
})


module.exports = (mongoose.models && mongoose.models.Product ? mongoose.models.Product : mongoose.model('Product', productSchema));

