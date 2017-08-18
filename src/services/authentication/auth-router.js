var router = require('express').Router()
var c = require('./auth-controller')

// endpoints
router.get('/', c.login)

module.exports = router
