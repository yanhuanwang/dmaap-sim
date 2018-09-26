var express = require('express');
const stream = require('stream');
var app = express();
var fs = require("fs");
const multer = require('multer');
const upload = multer({
  dest: 'uploads/' // this saves your file into a directory called "uploads"
});
const fileUpload = require('express-fileupload');
var path = require('path');

var bodyParser = require('body-parser')
app.use(fileUpload());

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
app.post('/publish/1/:filename', function (req, res) {
	console.log(req.files);
	console.log(req.body)
	console.log(req.headers)
	var filename = path.basename(req.params.filename);
  filename = path.resolve(__dirname, filename);
	console.log(req.params.filename);
  fs.writeFile(filename, req.body, function (error) {
  	if (error) { console.error(error); }
	});
	 res.send("ok")
})

var server = app.listen(3906, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
