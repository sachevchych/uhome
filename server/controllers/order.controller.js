const Order = require('../models/order.model')

module.exports.create = async (req, res) => {
  try {
    const lastOrder = await Order.findOne().sort({_id: -1})
    const newId = lastOrder === null ? 10000 : lastOrder._id + 1

    const order = new Order({
      _id: newId,
      name: req.body.name,
      surname: req.body.surname,
      phone: req.body.phone,
      email: req.body.email,
      city: req.body.city,
      company: req.body.company,
      type: req.body.type,
      department: req.body.department,
      address: req.body.address,
      payment: req.body.payment
    })

    res.status(201).json(await order.save())
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.update = async (req, res) => {
  try {
    const $set = {
      name: req.body.name,
      surname: req.body.surname,
      phone: req.body.phone,
      email: req.body.email,
      city: req.body.city,
      company: req.body.company,
      type: req.body.type,
      department: req.body.department,
      address: req.body.address,
      payment: req.body.payment
    }

    res.json(await Order.findOneAndUpdate({_id: req.body._id}, $set, {new: true}))
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getAll = async (req, res) => {
  try {
    res.json(await Order.find())
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.adminGetById = async (req, res) => {
  try {
    res.status(201).json(await Order.findById(req.params.id))
  } catch (e) {
    res.status(500).json(e)
  }
}


