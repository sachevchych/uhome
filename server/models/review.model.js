const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  pros: {
    type: String
  },
  cons: {
    type: String
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }
})

module.exports = mongoose.model('Review', reviewSchema);

