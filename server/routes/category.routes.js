const passport = require('passport')
const {Router} = require('express')
const ctr = require('../controllers/category.controller')
const router = Router()

// /api/category/admin
router.post(
  '/admin',
  passport.authenticate('jwt', {session: false}),
  ctr.create
)

router.get(
  '/admin',
  passport.authenticate('jwt', {session: false}),
  ctr.getAll
)

// GET /api/category/admin/:id
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

// /api/category/
router.get('/', ctr.getAllCategories)
router.get('/:id', ctr.getById)
router.get('/parent/:id', ctr.getSubcategories)

module.exports = router
