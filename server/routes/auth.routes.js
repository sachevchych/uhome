const {Router} = require('express')
const {login, createUser} = require('../controllers/auth.controller')
const router = Router()

router.post('/login', login)
router.post('/create', createUser)

module.exports = router
