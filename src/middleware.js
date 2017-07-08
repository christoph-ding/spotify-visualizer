
module.exports = function(app) {
  console.log('inside middleware...')
  
  require('./services/logging.js')(app)

  app.use(function(req, res) {
    console.log('here')
    res.send()
  })  

}
