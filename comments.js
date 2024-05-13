// Create web server
// Create a web server that can serve the comments from comments.json
// and the form from index.html. The server should listen on port 3000.

var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function(req, res) {
  // Serve the comments from comments.json
  if (req.url === '/comments.json') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    fs.createReadStream(path.join(__dirname, 'comments.json')).pipe(res);
  } else {
    // Serve the form from index.html
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res);
  }
});

server.listen(3000, function() {
  console.log('Server listening on port 3000');
});