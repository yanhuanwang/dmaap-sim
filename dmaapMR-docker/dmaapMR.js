var express = require('express');
var app = express();
var fs = require("fs");

app.get('/events/unauthenticated.VES_NOTIFICATION_OUTPUT/OpenDcae-c12/C12', function (req, res) {
	var message={"event":{"notificationFields": {"changeIdentifier": "PM_MEAS_FILES","changeType": "FileReady","notificationFieldsVersion": 1.0,"arrayOfAdditionalFields": [{"location": "ftpes://myuser:mypass@localhost:21/fileFromFtps.tar.gz","compression": "gzip","fileFormatType": "org.3GPP.32.435#measCollec","fileFormatVersion": "V10"},{"location": "sftp://foo:pass@localhost:22/fileFromSftp.tar.gz","compression": "gzip","fileFormatType": "org.3GPP.32.435#measCollec","fileFormatVersion": "V10"}]}}}
//	console.log("recieved request from DFC, response with message {\"event\":{\"notificationFields\": {\"changeIdentifier\": \"PM_MEAS_FILES\",\"changeType\": \"FileReady\",\"notificationFieldsVersion\": 1.0,\"arrayOfAdditionalFields\": [{\"location\": \"ftpes://myuser:mypass@localhost:21/fileFromFtps.tar.gz\",\"compression\": \"gzip\",\"fileFormatType\": \"org.3GPP.32.435#measCollec\",\"fileFormatVersion\": \"V10\"},{\"location\": \"sftp://foo:pass@localhost:22/fileFromSftp.tar.gz\",\"compression\": \"gzip\",\"fileFormatType\": \"org.3GPP.32.435#measCollec\",\"fileFormatVersion\": \"V10\"}]}}}")
	console.log("recieved request from DFC, respond with message:")
	console.log(JSON.stringify(message, undefined, 4));
   res.json(message)
})

var server = app.listen(3906, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
