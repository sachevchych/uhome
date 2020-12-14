const {Router} = require('express')
const ctr = require('../controllers/review.controller')
const router = Router()

// /api/review
router.get('/:id', ctr.getOne)
router.post('/', ctr.create)


module.exports = router
