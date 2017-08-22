var router = require('express').Router()
var c = require('./auth-controller')

// endpoints
router.get('/', c.login)
// router.get('/landing', c.login)

module.exports = router
