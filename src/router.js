var friendsRouter = require('./services/friends/friends-router')

module.exports = function(app) {
  console.log("inside router ... mounting all routers")

  app.use('/friends', friendsRouter)
}
