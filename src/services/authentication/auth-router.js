var router = require('express').Router()

var test = function(req, res, next) {
  console.log('authing ... ')
  next()
}

// endpoints
router.get('/', test)

module.exports = router
