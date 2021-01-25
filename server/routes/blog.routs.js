const passport = require('passport')
const {Router} = require('express')
const ctr = require('../controllers/blog.controller')
const router = Router()

// Admin
// /api/Blog/admin
router.post(
  '/admin/',
  passport.authenticate('jwt', {session: false}),
  ctr.create
)

router.get(
  '/admin/',
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
// Client
router.get('/', ctr.getAll)
router.get('/:id', ctr.getById)
router.put('/:id', ctr.addView)


module.exports = router
