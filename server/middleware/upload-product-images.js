const path = require('path')
const multer = require('multer')
const moment = require('moment')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../../static/img', 'products'))
  },
  filename: function(req, file, cb) {
    cb(null, moment().format('DDMMYYYY-HHmmss-SSS') + path.extname(file.originalname))
  }
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

module.exports = multer({
  storage,
  fileFilter
})
