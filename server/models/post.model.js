const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: Date.now
  },
  views: {
    type: Number,
    default: 0
  },
  imageUrl: String,
  // comments: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'comments'
  //   }
  // ]
})

module.exports = (mongoose.models && mongoose.models.Post ? mongoose.models.Post : mongoose.model('Post', postSchema));
