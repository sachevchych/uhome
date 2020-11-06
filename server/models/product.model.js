const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String
  },
  active: {
    type: Boolean
  },
  category: {
    type: String,
    default: 'root'
  },
  properties: {
    type: Array
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
  images: {
    type: Array
  }
})

module.exports = (mongoose.models && mongoose.models.Product ? mongoose.models.Product : mongoose.model('Product', productSchema));

