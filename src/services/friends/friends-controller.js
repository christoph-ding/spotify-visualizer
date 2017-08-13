module.exports.listFriends = function(req, res, next) {
  console.log('GETTING friends')
  next()
}

module.exports.listSpecificFriend = function(req, res, next) {
  console.log('GETTING friend: ', req.params.id)
  next()
}

module.exports.sendMessage = function(req, res, next) {
  console.log('POSTING to friend: ', req.params.id)
  console.log('with msg: ', req.body)
  next()  
}
