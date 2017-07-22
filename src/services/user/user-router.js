var router = require('express').Router()
var c = require('./user-controller')

router.get('/', c.listUser)
router.get('/:id', c.listSpecificUser)

module.exports = router
