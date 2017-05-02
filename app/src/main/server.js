require('http').createServer(function (req, res) {
  res.end('Hello from server started by Electron app')
}).listen(9000)
