var credentials = require('./user_creds.js')
var request = require('request')

function testAuth(req, res, next) {
  console.log('authing ... ')
  console.log(credentials)

  // make a get request with our credentials
  var url = 'http://www.google.com'

  function test(err, res, body) {
    console.log(res.statusCode)
    next()
  }

  request(url, test)
}


module.exports.testAuth = testAuth
