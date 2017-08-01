var router = require('express').Router()
var c = require('./friends-controller')

// endpoints
router.get('/', c.listFriends)
router.get('/:id', c.listSpecificFriend)
router.post('/:id', c.sendMessage)

module.exports = router
