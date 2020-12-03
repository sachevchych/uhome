const mongoose = require('mongoose')
const { Types } = mongoose.Schema

const productSchema = new mongoose.Schema({
  name: {
    type: String
  },
  brand: {
    type: Types.ObjectId,
    ref: 'Brand'
  },
  model: {
    type: String
  },
  url: {
    type: String,
    required: true,
    unique: true
  },
  active: {
    type: Boolean
  },
  category: {
    type: String,
    default: 'root'
  },
  properties: {
    type: Object
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

