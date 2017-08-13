module.exports.listUser = function(req, res, next) {
  console.log('GETTING user')
  next()
}

module.exports.listSpecificUser = function(req, res, next) {
  console.log('GETTING user: ', req.params.id)
  next()
}
