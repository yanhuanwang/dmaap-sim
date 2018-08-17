var express = require('express');
var app = express();
var fs = require("fs");

app.get('/events/unauthenticated.SEC_OTHER_OUTPUT/OpenDcae-c12/c12', function (req, res) {
   res.json({"event":{"notificationFields": {"changeIdentifier": "PM_MEAS_FILES","changeType": "FileReady","notificationFieldsVersion": 1.0,"arrayOfAdditionalFields": [{"location": "ftpes://myuser:mypass@localhost:21/test5.txt","compression": "gzip","fileFormatType": "org.3GPP.32.435#measCollec","fileFormatVersion": "V10"},{"location": "sftp://foo:pass@localhost:22/test3.txt","compression": "gzip","fileFormatType": "org.3GPP.32.435#measCollec","fileFormatVersion": "V10"}]}}})
})

var server = app.listen(2222, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
