var friendsRouter = require('./services/friends/friends-router')
var userRouter = require('./services/user/user-router')

module.exports = function(app) {
  console.log("inside router ... mounting all routers")

  app.use('/friends', friendsRouter)
  app.use('/user', userRouter)
}
