var http = require('http');

http.createServer(function (req, res) {
  res.write("BFLxMain2.1 - I'm up baby!");
  res.end();
}).listen(8080);
