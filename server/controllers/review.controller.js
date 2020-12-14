const mongoose = require('mongoose')
const Review = require('../models/review.model')
const Product = require('../models/product.model')

module.exports.create = async (req, res) => {
  try {
    const review = new Review({
      author: req.body.author,
      rating: req.body.rating,
      text: req.body.text,
      pros: req.body.pros,
      cons: req.body.cons,
      product: new mongoose.Types.ObjectId(req.body.product)
    })

    const result = await review.save()

    await Product.findByIdAndUpdate(
      req.body.product,
      {
        $push: {reviews: new mongoose.Types.ObjectId(result._id)}
      }
    )

    res.status(201).json(result)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getOne = async (req, res) => {
  try {
    res.status(201).json(await Review.findById(req.params.id))
  } catch (e) {
    res.status(500).json(e)
  }
}
