const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const keys = require('../keys')
const User = require('../models/user.model')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.JWT
}

module.exports = new JwtStrategy(options, function (payload, done) {
    return User.findById(payload.userId)
      .then(user => done(null, user))
      .catch(err => done(err))
})
