const Category = require('../models/category.model')

module.exports.create = async (req, res) => {
  try {
    const category = new Category({
      name: req.body.name,
      active: req.body.active,
      parent: req.body.parent,
      properties: req.body.properties
    })

    const result = await category.save()
    res.status(201).json(result)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.update = async (req, res) => {
  try {
    const $set = {
      name: req.body.name,
      active: req.body.active,
      parent: req.body.parent,
      properties: req.body.properties
    }

    const category = await Category.findOneAndUpdate({_id: req.body._id}, $set, {new: true})
    res.json(category)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const categories = await Category.find()
    res.status(201).json(categories)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getById = async (req, res) => {
  try {
    await Category.findById(req.params.id, (err, category) => res.status(201).json(category))
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.remove = async (req, res) => {
  try {
    await Category.deleteOne({_id: req.params.id})
    res.json({message: 'Категорію видалено'})
  } catch (e) {
    res.status(500).json(e)
  }
}
