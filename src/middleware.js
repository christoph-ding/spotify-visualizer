module.exports = function(app) {
  console.log('inside middleware...')
  
  var testLog = function(req, res) {
    console.log('test log')
    res.send()
  }

  app.get('/test', testLog)

}
