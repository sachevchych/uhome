const Property = require('../models/property.model')

module.exports.create = async (req, res) => {
  try {
    const property = new Property()

    property.name = req.body.name
    property.type = req.body.type
    property.multiple = req.body.multiple
    property.main = req.body.main
    property.options = req.body.options

    const result = await property.save()
    res.status(201).json(result)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.update = async (req, res) => {
  try {

    const $property = {
      name: req.body.name,
      type: req.body.type,
      multiple: req.body.multiple,
      main: req.body.main,
      options: req.body.options,
    }

    const property = await Property.findOneAndUpdate({_id: req.body._id}, $property, {new: true})
    res.json(property)
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
    const property = await Property.findById(req.params.id)
    res.status(201).json(property)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.remove = async (req, res) => {
  try {
    await Property.deleteOne({_id: req.params.id})
    res.json({message: 'Властивість видалено'})
  } catch (e) {
    res.status(500).json(e)
  }
}

