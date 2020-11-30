const passport = require('passport')
const {Router} = require('express')
const upload = require('../middleware/upload')
const ctr = require('../controllers/products.controller')
const router = Router()

// Admin
// /api/products/admin/
router.post(
  '/admin/create',
  // passport.authenticate('jwt', {session: false}),
  ctr.create
)

router.get(
  '/admin',
  // passport.authenticate('jwt', {session: false}),
  ctr.getAll
)

router.get(
  '/admin/:id',
  // passport.authenticate('jwt', {session: false}),
  ctr.getById
)

router.put(
  '/admin/:id',
  // passport.authenticate('jwt', {session: false}),
  ctr.update
)

router.delete(
  '/admin/:id',
  // passport.authenticate('jwt', {session: false}),
  ctr.remove
)

// Images
router.post(
  '/image',
  // passport.authenticate('jwt', {session: false}),
  upload.single('image'),
  ctr.uploadImage
)

router.delete(
  '/image/:fileName',
  // passport.authenticate('jwt', {session: false}),
  ctr.removeImage
)

// Public
// /api/products/
router.get('/', ctr.getProducts)
router.get('/:id', ctr.getById)
// router.put('/:id', ctr.addView)


module.exports = router
