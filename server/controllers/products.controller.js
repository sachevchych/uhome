const Product = require('../models/product.model')

module.exports.create = async (req, res) => {
  const $set = {
    name: req.body.name,
    active: req.body.active,
    category: req.body.category,
    properties: req.body.properties
  }

  if (req.files) {
    $set.images = []
    req.files.forEach(file => {
      $set.images.push('/images/products/' + file.filename)
    })
  }

  const product = new Product($set)

  try {
    await product.save()
    res.status(201).json(product)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const products = await Product.find().sort({date: -1})
    res.json(products)
  } catch (e) {
    res.status(500).json(e)
  }

}

module.exports.getById = async (req, res) => {
  try {
    await Product.findById(req.params.id, (err, product) => {
      res.json(product)
    })
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.update = async (req, res) => {
  const $set = createQuery(req)

  try {
    const product = await Product.findOneAndUpdate({_id: req.params.id}, $set, {new: true})
    res.json(product)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.remove = async (req, res) => {
  try {
    await Product.deleteOne({_id: req.params.id})
    res.json({message: 'Запис видалено'})
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.addView = async (req, res) => {
  const $set = {
    views: ++req.body.views
  }
  try {
    await Product.findOneAndUpdate({_id: req.params.id}, {$set})
    res.status(204).json()
  } catch (e) {
    res.status(500).json(e)
  }
}

function createQuery(req) {
  const $set = {}
  for (let property in req.body) {
    $set[property] = req.body[property]
  }

  if (req.file) {
    $set.imageUrl = '/products_images/' + req.file.filename
  }

  return $set
}
