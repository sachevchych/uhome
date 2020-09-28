const express = require('express')
const consola = require('consola')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')


const app = express()

// mongoose.connect(keys.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
//   .then(() => consola.success('MongoDB connected'))
//   .catch(error => console.error(error))

// app.use(passport.initialize())
// passport.use(passportStrategy)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


module.exports = app

if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    consola.success(`API server listening on port ${port}`)
  })
}
