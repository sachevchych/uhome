const {Schema, model} = require('mongoose')

const categorySchema = new Schema({
  name: {
    type: String
  },
  active: {
    type: Boolean,
    default: true
  },
  description: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  imageUrl: {
    type: String
  }
})

module.exports = model('Category', categorySchema)
