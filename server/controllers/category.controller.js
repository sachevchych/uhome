const Category = require('../models/category.model')

module.exports.create = async (req, res) => {
  try {
    const category = new Category({
      name: req.body.name,
      url: req.body.url,
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
    const category = await Category.findOne({ url: req.body.url }).exec();

    if (category && category._id === req.body._id) {
      res.status(409).json({ message: 'Такий символьни код вже існує' });
    } else {
      const $set = {
        name: req.body.name,
        url: req.body.url,
        active: req.body.active,
        parent: req.body.parent,
        properties: req.body.properties
      }

      const updatedCategory = await Category.findOneAndUpdate({_id: req.body._id}, $set, {new: true})
      res.status(201).json(updatedCategory)
    }
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
    await Category.findById(req.params.id, (err, category) => {
      res.status(201).json(category)
    })
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

module.exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find()
    res.status(201).json(categories)
  } catch (e) {
    res.status(500).json(e)
  }
}
module.exports.getSubcategories = async (req, res) => {
  try {
    const categories = await Category.find({ parent: req.params.id })
    res.status(201).json(categories)
  } catch (e) {
    res.status(500).json(e)
  }
}

