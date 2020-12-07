const mongoose = require('mongoose')
const Schema = mongoose.Schema

const propertySchema = new mongoose.Schema({})

const productSchema = new mongoose.Schema({
  name: {
    type: String
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'Brand'
  },
  model: {
    type: String
  },
  url: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  active: {
    type: Boolean
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  specs: [
    {
      property: {type: Schema.Types.ObjectId, ref: 'Property'},
      value: Schema.Types.Mixed
    }
  ],
  properties: Object,
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

