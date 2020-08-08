var express = require("express");
var app = express();

app.use(express.static(__dirname + "public"));
app.use("/a", express.static(__dirname + "/public"));
app.use("/", express.static(__dirname + "/public/index.html"));

const port = process.env.PORT || 3000;
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(`Server connected on host ${host} and port ${port}`);
});
