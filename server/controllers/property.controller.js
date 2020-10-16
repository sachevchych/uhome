const Property = require('../models/property.model')

module.exports.create = async (req, res) => {
  try {
    const property = new Property()

    property.name = req.body.name
    property.type = req.body.type
    property.mutiple = req.body.multiple
    property.values = req.body.values

    await property.save()
    res.status(201)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const property = await Property.find().sort({date: -1})
    res.json(property)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getById = async (req, res) => {
  try {
    await Property.findById(req.params.id, (err, product) => {
      res.json(product)
    })
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.update = async (req, res) => {
  try {
    const $set = {}

    $set.name = req.body.name
    $set.type = req.body.type
    $set.mutiple = req.body.multiple
    $set.values = req.body.values

    const property = await Property.findOneAndUpdate({_id: req.params.id}, $set, {new: true})
    res.json(property)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.remove = async (req, res) => {
  try {
    console.log(req.params.id)
    await Property.deleteOne({_id: req.params.id})
    res.json({message: 'Властивість видалено'})
  } catch (e) {
    res.status(500).json(e)
  }
}

