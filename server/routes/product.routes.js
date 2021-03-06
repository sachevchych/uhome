const passport = require('passport')
const {Router} = require('express')
const ctr = require('../controllers/product.controller')
const router = Router()

// Admin
// /api/products/admin/
router.post(
  '/admin/create',
  passport.authenticate('jwt', {session: false}),
  ctr.create
)

router.get(
  '/admin',
  passport.authenticate('jwt', {session: false}),
  ctr.getAll
)

router.get(
  '/admin/:id',
  passport.authenticate('jwt', {session: false}),
  ctr.getById
)

router.put(
  '/admin/:id',
  passport.authenticate('jwt', {session: false}),
  ctr.update
)

router.delete(
  '/admin/:id',
  passport.authenticate('jwt', {session: false}),
  ctr.remove
)

// Public
// /api/products/
router.get('/', ctr.getProducts)
router.get('/:id', ctr.getById)
router.get('/url/:url', ctr.getProductDetailed)
// router.put('/:id', ctr.addView)


module.exports = router
