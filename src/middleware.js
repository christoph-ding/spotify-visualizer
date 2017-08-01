module.exports = function(app) {
  console.log('inside middleware...')
  
  require('./services/logging.js')(app)
  require('./services/auth.js')

  app.use(function(req, res) {
    console.log('final function before sending response')
    res.send()
  })  

}
