const express = require('express')
const consola = require('consola')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const fs = require('fs')
const jwtStrategy = require('./middleware/passport-strategy')
const authRoutes = require('./routes/auth.routes')
const blogRoutes = require('./routes/blog.routs')
const productsRoutes = require('./routes/product.routes')
const propertyRoutes = require('./routes/property.routes')
const categoryRoutes = require('./routes/category.routes')
const brandRoutes = require('./routes/brand.routes')
const reviewRoutes = require('./routes/review.routes')
const orderRoutes = require('./routes/order.routes')
const uploadRoutes = require('./routes/upload.routes')
const keys = require('./keys/index')
const app = express()

mongoose.connect(keys.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
  .then(() => consola.success('MongoDB connected'))
  .catch(error => console.error(error))

app.use(passport.initialize())
passport.use(jwtStrategy)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// directories validation
fs.stat('static/img/products', function(err) {
  if (err) {
    consola.info('Directory for store will be created')
    fs.mkdirSync('static/img/products');
  } else {
    consola.success('Directory for store product images exist')
  }
});

// /api/...
app.use('/auth', authRoutes)
app.use('/blog', blogRoutes)
app.use('/products', productsRoutes)
app.use('/property', propertyRoutes)
app.use('/category', categoryRoutes)
app.use('/brand', brandRoutes)
app.use('/review', reviewRoutes)
app.use('/order', orderRoutes)
app.use('/upload', uploadRoutes)


module.exports = app

if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    consola.success(`API server listening on port ${port}`)
  })
}
