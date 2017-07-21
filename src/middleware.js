module.exports = function(app) {
  console.log('inside middleware...')
  
  require('./services/logging.js')(app)

  // the endpoints are here for now,
  // will make into routers

  app.get('/friends', function(req, res, next) {
    console.log('GETTING friends')
    next()
  })



  app.use(function(req, res) {
    console.log('final function before sending response')
    res.send()
  })  

}
