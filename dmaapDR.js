var express = require('express');
const stream = require('stream');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/octet-stream' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))
app.post('/events/unauthenticated.FILE_READY', function (req, res) {
	console.log(req.files);
	console.log(req.body)
	console.log(req.headers)
   res.send("ok")
})

var server = app.listen(2223, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
