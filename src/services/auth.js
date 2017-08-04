var credentials = require('./user_creds.js')

function testAuth(req, res, next) {
  console.log('authing ... ')
  console.log(credentials)
  next()
}


module.exports.testAuth = testAuth
