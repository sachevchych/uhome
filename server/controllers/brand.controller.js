const Brand = require('../models/brand.model')

module.exports.create = async (req, res) => {
  try {
    const brand = new Brand()

    brand.name = req.body.name

    const result = await brand.save()
    res.status(201).json(result)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.update = async (req, res) => {
  try {
    const $brand = {
      name: req.body.name,
    }

    const brand = await Brand.findOneAndUpdate({_id: req.body._id}, $brand, {new: true})
    res.json(brand)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const brand = await Brand.find()
    res.json(brand)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getById = async (req, res) => {
  try {
    await Brand.findById(req.params.id, (err, brand) => res.status(201).json(brand))
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.remove = async (req, res) => {
  try {
    await Brand.deleteOne({_id: req.params.id})
    res.json({message: 'Бренд видалено'})
  } catch (e) {
    res.status(500).json(e)
  }
}

