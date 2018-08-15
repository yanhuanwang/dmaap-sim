var express = require('express');
var app = express();
var fs = require("fs");

app.post('/events/unauthenticated.FILE_READY', function (req, res) {
   res.send("ok")
})

var server = app.listen(2223, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
