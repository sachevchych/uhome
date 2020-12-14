const express = require('express')
const consola = require('consola')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const passportStrategy = require('./middleware/passport-strategy')
const authRoutes = require('./routes/auth.routes')
const blogRoutes = require('./routes/blog.routs')
const productsRoutes = require('./routes/product.routes')
const propertyRoutes = require('./routes/property.routes')
const categoryRoutes = require('./routes/category.routes')
const brandRoutes = require('./routes/brand.routes')
const reviewRoutes = require('./routes/review.routes')
const keys = require('./keys/index')
const app = express()

mongoose.connect(keys.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
  .then(() => consola.success('MongoDB connected'))
  .catch(error => console.error(error))

app.use(passport.initialize())
passport.use(passportStrategy)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// /api/...
app.use('/auth', authRoutes)
app.use('/blog', blogRoutes)
app.use('/products', productsRoutes)
app.use('/property', propertyRoutes)
app.use('/category', categoryRoutes)
app.use('/brand', brandRoutes)
app.use('/review', reviewRoutes)


module.exports = app

if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    consola.success(`API server listening on port ${port}`)
  })
}
