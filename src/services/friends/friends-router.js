var express = require('express')
var friendsRouter = express.Router()
var friendsController = require('./friends-controller')

friendsRouter.get('/', friendsController.listFriends)
friendsRouter.get('/:id', friendsController.listSpecificFriend)
friendsRouter.post('/:id', friendsController.sendMessage)

module.exports = friendsRouter
