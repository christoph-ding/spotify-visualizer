var bodyParser = require('body-parser')

module.exports = function(app) {
  console.log('inside middleware...')
  
  // mount app on general node dependencies
  app.use(bodyParser.json())

  // mount my own middleware 
  require('./services/logging')(app)

  // mount routers
  require('./router.js')(app)

  // user related
  app.get('/user', function(req, res, next) {
    console.log('GETTING user')
    next()
  })

  app.get('/user/:id', function(req, res, next) {
    console.log('GETTING user: ', req.params.id)
    next()
  })

  app.use(function(req, res) {
    console.log('final function before sending response')
    res.send()
  })  

}
