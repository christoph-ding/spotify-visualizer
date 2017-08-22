var credentials = require('./user_creds.js')
var request = require('request')
var path = require('path')
var express = require('express')

module.exports.login = function(req, res, next) {
  console.log('logging in ... ')

  var clientID = credentials.Client_ID
  var clientSecret = credentials.Client_Secret

  var spotifyAuthRoot = 'https://accounts.spotify.com/authorize'
  var redirect_uri = 'https://www.google.com'
  var authenticationURL = spotifyAuthRoot + '?client_id=' + clientID + '&redirect_uri=' + encodeURIComponent(redirect_uri) + '&response_type=code'

  console.log(authenticationURL)

  var scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
    // querystring.stringify({
    //   response_type: 'code',
    //   client_id: client_id,
    //   scope: scope,
    //   redirect_uri: redirect_uri,
    //   state: state
    // }));
  )
}

module.exports.loginLanding = function(req, res, next) {
  var filePath = path.resolve(__dirname + '/../../../public/login-landing.html')
  console.log(filePath)
  res.sendFile(filePath)
  // next()
}

  // make a get request with our credentials

//   request(authenticationURL, next)
// }

// return 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID +
//               '&redirect_uri=' + encodeURIComponent(REDIRECT_URI) +
//               '&scope=' + encodeURIComponent(scopes.join(' ')) +
//               '&response_type=token';
