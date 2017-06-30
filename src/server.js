const express = require('express')
const app = express()
const port = 8000

app.use(express.static('public'))


// start the server
var playStartUpMessage = function() {
  var message = 'listening on port ' + port
  console.log(message)
}

app.listen(port, playStartUpMessage)
