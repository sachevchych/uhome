const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')
const keys = require('../keys')
const User = require('../models/user.model')

module.exports.login = async (req, res) => {
  const candidate = await User.findOne({login: req.body.login})

  if (candidate) {
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, candidate.password)

    if (isPasswordCorrect) {
      const token = jwt.sign({
        login: candidate.login,
        userId: candidate._id
      }, keys.JWT, {expiresIn: 60*60})
      res.json({token})
    } else {
      res.status(401).json({message: 'Не вірний пароль'})
    }

  } else {
    res.status(404).json({message: 'Не вірна комбінація логіну та паролю'})
  }
};

module.exports.createUser = async (req, res) => {
  const candidate = await User.findOne({login: req.body.email })

  if (candidate) {
    res.status(409).json({message: 'Така електронна адреса вже існує вже існує'})
  } else {
    const salt = bcrypt.genSaltSync(10)
    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, salt),
      name: req.body.name,
      phone: req.body.phone,
      login: req.body.email
    })

    await user.save()
    res.status(201).json(user)
  }
};
