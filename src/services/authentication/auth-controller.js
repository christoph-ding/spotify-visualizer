var credentials = require('./user_creds.js')
var request = require('request')

module.exports.testAuth = function(res, req, next) {
  console.log('sending the login page')
  next()
}

// function testAuth(req, res, next) {
//   console.log('authing ... ')
//   console.log(credentials)

//   var clientID = credentials.Client_ID
//   var clientSecret = credentials.Client_Secret

//   // make a get request with our credentials
//   var spotifyAuthRoot = 'https://accounts.spotify.com/authorize'
//   var redirect_uri = 'https://www.google.com'
//   var authenticationURL = spotifyAuthRoot + '?client_id=' + clientID + '&response_type=code' + '&redirect_uri=' + redirect_uri

//   console.log(authenticationURL)

//   request(authenticationURL, next)
// }

// return 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID +
//               '&redirect_uri=' + encodeURIComponent(REDIRECT_URI) +
//               '&scope=' + encodeURIComponent(scopes.join(' ')) +
//               '&response_type=token';
