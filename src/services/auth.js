var credentials = require('./user_creds.js')
var request = require('request')

function testAuth(req, res, next) {
  console.log('authing ... ')
  console.log(credentials)

  // make a get request with our credentials

  next()
}


module.exports.testAuth = testAuth
