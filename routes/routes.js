let express = require('express')
let router = express.Router()

// function will run to provide a response.
// req - short for request - represents the requires the client has made.
// res - short for response - represents the response that the server will send back.
router.get('/', function(req, res, next) {
  res.json( { 'message': 'hello ITEC 2560 web programmers! I am using Azure app!!'} )
})

module.exports = router