var credentials = require('./user_creds.js')
var request = require('request')
var path = require('path')
var express = require('express')

  // console.log('logging in ... ')

  // var clientID = credentials.Client_ID
  // var clientSecret = credentials.Client_Secret

  // var spotifyAuthRoot = 'https://accounts.spotify.com/authorize'
  // var redirect_uri = 'https://www.google.com'
  // var authenticationURL = spotifyAuthRoot + '?client_id=' + clientID + '&redirect_uri=' + encodeURIComponent(redirect_uri) + '&response_type=code'

  // console.log(authenticationURL)

module.exports.login = function(req, res, next) {

}

module.exports.loginLanding = function(req, res, next) {
  var filePath = path.resolve(__dirname + '/../../../public/login-landing.html')
  console.log(filePath)
  res.sendFile(filePath)
}
