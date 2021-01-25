const passport = require('passport')
const {Router} = require('express')
const upload = require('../middleware/upload-product-images')
const ctr = require('../controllers/upload.controller')
const router = Router()

// /api/upload/product-images
router.post(
  '/product-images',
  // passport.authenticate('jwt', { session: false }),
  upload.single('image'),
  ctr.uploadImage
)
// /api/upload/image/${fileName}
router.delete(
  '/image/:fileName',
  // passport.authenticate('jwt', { session: false }),
  ctr.removeImage
)

module.exports = router
