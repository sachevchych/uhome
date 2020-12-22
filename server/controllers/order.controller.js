const mongoose = require('mongoose')
const Order = require('../models/order.model')

module.exports.create = async (req, res) => {
  try {
    const lastOrder = await Order.findOne().sort({_id: -1})
    const newId = lastOrder === null ? 10000 : lastOrder._id + 1

    const order = new Order({
      _id: newId,
      contacts: {
        name: req.body.contacts.name,
        surname: req.body.contacts.surname,
        middleName: req.body.contacts.middleName,
        phone: req.body.contacts.phone,
        email: req.body.contacts.email,
      },
      delivery: {
        city: req.body.delivery.city,
        company: req.body.delivery.company,
        deliveryType: req.body.delivery.deliveryType,
        department: req.body.delivery.department,
        address: req.body.delivery.address,
      },
      payment: {
        paymentType: req.body.payment.paymentType,
        paidFor: req.body.payment.paidFor
      }
    })

    order.cart = []
    req.body.cart.forEach(element => {
      order.cart.push({
        product: new mongoose.Types.ObjectId(element.product),
        amount: element.amount,
        price: element.price
      })
    })

    const response = await order.save()
    res.status(201).json(response)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.update = async (req, res) => {
  try {
    const $set = {
      status: req.body.status,
      contacts: {
        name: req.body.contacts.name,
        surname: req.body.contacts.surname,
        middleName: req.body.contacts.middleName,
        phone: req.body.contacts.phone,
        email: req.body.contacts.email,
      },
      delivery: {
        city: req.body.delivery.city,
        company: req.body.delivery.company,
        deliveryType: req.body.delivery.deliveryType,
        department: req.body.delivery.department,
        address: req.body.delivery.address,
      },
      payment: {
        paymentType: req.body.payment.paymentType,
        paidFor: req.body.payment.paidFor
      },
      cart: []
    }

    req.body.cart.forEach(element => {
      $set.cart.push({
        product: new mongoose.Types.ObjectId(element.product._id),
        amount: element.amount,
        price: element.price
      })
    })

    const response = await Order.findOneAndUpdate({_id: req.params.id}, $set, {new: true})
    res.json(response)
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
    const response = await Order.findById(req.params.id).populate('cart.product')
    res.status(201).json(response)
  } catch (e) {
    res.status(500).json(e)
  }
}


