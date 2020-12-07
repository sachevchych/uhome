const mongoose = require('mongoose')
const Product = require('../models/product.model')
const fs = require('fs')

module.exports.create = async (req, res) => {
  try {
    const existProduct = await Product.findOne({url: req.body.url})

    if (!existProduct) {
      const product = new Product({
        active: req.body.active,
        images: req.body.images,
        name: req.body.name,
        url: req.body.url,
        brand: new mongoose.Types.ObjectId(req.body.brand),
        model: req.body.model,
        properties: req.body.properties,
        price: req.body.price
      })

      if (req.body.category) product.category = new mongoose.Types.ObjectId(req.body.category)

      if (req.body.properties) {
        const $setSpecs = []

        for (let prop in req.body.properties) {
          $setSpecs.push({
            property: new mongoose.Types.ObjectId(prop),
            value: Array.isArray(req.body.properties[prop]) ? [...req.body.properties[prop]] : [req.body.properties[prop]]
          })
        }

        product.specs = $setSpecs
      }

      await product.save()
      res.status(201).json(product)
    } else {
      res.status(409).json({message: 'Такий символьни код вже існує'});
    }
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.update = async (req, res) => {
  try {
    const existProduct = await Product.findOne({url: req.body.url})

    if (!existProduct || existProduct._id.toString() === req.body._id) {
      const $product = {
        active: req.body.active,
        images: req.body.images,
        name: req.body.name,
        url: req.body.url,
        brand: new mongoose.Types.ObjectId(req.body.brand),
        model: req.body.model,
        properties: req.body.properties,
        price: req.body.price
      }

      if (req.body.category) $product.category = new mongoose.Types.ObjectId(req.body.category)

      if (req.body.properties) {
        const $setSpecs = []

        for (let prop in req.body.properties) {
          $setSpecs.push({
            property: new mongoose.Types.ObjectId(prop),
            value: Array.isArray(req.body.properties[prop]) ? [...req.body.properties[prop]] : [req.body.properties[prop]]
          })
        }

        $product.specs = $setSpecs
      }

      const product = await Product.findOneAndUpdate({_id: req.params.id}, $product, {new: true})
      res.json(product)
    } else {
      res.status(409).json({message: 'Такий символьни код вже існує'});
    }
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
    const product = await Product.findById(req.params.id)
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
    res.json(await Product.find(req.query))
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getProductDetailed = async (req, res) => {
  try {
    const product = await Product.findOne({url: req.params.url}).populate('category').populate('brand').populate('specs.property')
    res.json(product)
  } catch (e) {
    res.status(500).json(e)
  }
}
