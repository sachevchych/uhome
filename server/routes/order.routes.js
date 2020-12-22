const {Router} = require('express')
const ctr = require('../controllers/order.controller')
const router = Router()

// Public routes - /api/order
router.post(
  '/',
  ctr.create
)


// Admin routes - /api/order
router.get(
  '/',
  // passport.authenticate('jwt', {session: false}),
  ctr.getAll
)

router.get(
  '/admin/:id',
  // passport.authenticate('jwt', {session: false}),
  ctr.adminGetById
)

router.put(
  '/admin/:id',
  // passport.authenticate('jwt', {session: false}),
  ctr.update
)

module.exports = router
