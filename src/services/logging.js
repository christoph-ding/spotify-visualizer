var testLog = function(req, res, next) {
  console.log('test log')
  next()
}

module.exports = function(app) {
  console.log('inside logging...')

  app.get('/test', testLog)
}

