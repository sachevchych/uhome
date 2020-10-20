const passport = require('passport')
const {Router} = require('express')
const {create, getAll, getById, update, remove} = require('../controllers/category.controller')
const router = Router()

// /api/property
router.post(
  '/',
  // passport.authenticate('jwt', {session: false}),
  create
)

router.get(
  '/',
  // passport.authenticate('jwt', {session: false}),
  getAll
)
//
router.get(
  '/:id',
  // passport.authenticate('jwt', {session: false}),
  getById
)

router.put(
  '/:id',
  // passport.authenticate('jwt', {session: false}),
  update
)

router.delete(
  '/:id',
  // passport.authenticate('jwt', {session: false}),
  remove
)

module.exports = router
