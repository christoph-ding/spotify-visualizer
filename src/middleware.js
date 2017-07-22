var bodyParser = require('body-parser')

module.exports = function(app) {
  console.log('inside middleware...')
  
  // mount app on general node dependencies
  app.use(bodyParser.json())

  // mount my own middleware 
  require('./services/logging')(app)

  // mount routers
  require('./router.js')(app)

  app.use(function(req, res) {
    console.log('final function before sending response')
    res.send()
  })  
}
