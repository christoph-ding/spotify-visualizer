var testLogOne = function(req, res, next) {
  console.log('test log: function 1')
  next()
}

var testLogTwo = function(req, res, next) {
  console.log('test log: function 2')
  next()
}

module.exports = function(app) {
  console.log('inside logging...')

  app.get('/test', testLogOne, testLogTwo)
}

