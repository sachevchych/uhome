const {Schema, model} = require('mongoose')

const propertySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  multiple: {
    type: Boolean,
    default: false
  },
  main: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array
  }
})

module.exports = model('Property', propertySchema)
