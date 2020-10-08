const passport = require('passport')
const {Router} = require('express')
const upload = require('../middleware/upload')
const ctr = require('../controllers/products.controller')
const router = Router()


// /api/products/..
router.post(
  '/create',
  passport.authenticate('jwt', {session: false}),
  upload.single('image'),
  ctr.create
)

router.get(
  '',
  passport.authenticate('jwt', {session: false}),
  ctr.getAll
)

router.get(
  '/:id',
  passport.authenticate('jwt', {session: false}),
  ctr.getById
)

router.put(
  '/:id',
  passport.authenticate('jwt', {session: false}),
  upload.single('image'),
  ctr.update
)

router.delete(
  '/:id',
  passport.authenticate('jwt', {session: false}),
  ctr.remove
)
// Client
router.get('/', ctr.getAll)
router.get('/:id', ctr.getById)
router.put('/:id', ctr.addView)


module.exports = router
