const express = require('express')
const app = express()
const port = 8000

// serve main page
app.use(express.static('public'))

// pass to middleware
require("./middleware.js")(app)

// start the server
var playStartUpMessage = function() {
  var message = 'listening on port ' + port
  console.log(message)
}

app.listen(port, playStartUpMessage)
