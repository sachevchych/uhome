const Product = require('../models/product.model')
const fs = require('fs')

module.exports.create = async (req, res) => {
  try {
    const product = new Product({
      active: req.body.active,
      category: req.body.category,
      images: req.body.images,
      name: req.body.name,
      model: req.body.model,
      properties: req.body.properties,
      price: req.body.price
    })

    await product.save()
    console.log(product)
    res.status(201).json(product)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.update = async (req, res) => {
  const $product = {
    active: req.body.active,
    category: req.body.category,
    images: req.body.images,
    name: req.body.name,
    model: req.body.model,
    properties: req.body.properties,
    price: req.body.price
  }

  try {
    const product = await Product.findOneAndUpdate({_id: req.params.id}, $product, {new: true})
    res.json(product)
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

module.exports.uploadImage = (req, res) => {
  if (req.file) {
    const fileData = {
      name: req.file.filename,
      size: req.file.size,
      url: '/images/products/' + req.file.filename
    }

    res.status(201).json(fileData)
  } else {
    res.status(500).json('File not found')
  }
}

module.exports.removeImage = (req, res) => {
  const fileUrl = './static/images/products/' + req.params.fileName
  try {
    fs.unlinkSync(fileUrl)
    res.json({message: 'File has been deleted'})
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find(req.query)
    res.json(products)
  } catch (e) {
    res.status(500).json(e)
  }
}
