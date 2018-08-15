var express = require('express');
var app = express();
var fs = require("fs");

app.get('/events/unauthenticated.SEC_OTHER_OUTPUT/OpenDcae-c12/c12', function (req, res) {
   res.json({"event":{"notificationFields": {"changeIdentifier": "PM_MEAS_FILES","changeType": "FileReady","notificationFieldsVersion": 1.0,"arrayOfAdditionalFields": [{"location": "ftpes://192.168.0.101:22/ftp/rop/A20161224.1030-1045.bin.gz","compression": "gzip","fileFormatType": "org.3GPP.32.435#measCollec","fileFormatVersion": "V10"},{"location": "ftpes://192.168.0.101:22/ftp/rop/A20161224.1045-1100.bin.gz","compression": "gzip","fileFormatType": "org.3GPP.32.435#measCollec","fileFormatVersion": "V10"}]}}})
})

var server = app.listen(2222, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
