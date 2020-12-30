const {Schema, model} = require('mongoose')

const categorySchema = new Schema({
  name: {
    type: String
  },
  image: {
    type: String
  },
  url: {
    type: String,
    required: true,
    unique: true
  },
  active: {
    type: Boolean,
    default: true
  },
  parent: {
    type: String,
    default: 'root'
  },
  properties: {
    type: Array
  }
})

module.exports = model('Category', categorySchema)
