//const d3 = require('d3');
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  if(req.url == '/'){
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }
  else if (req.url == "/scripts/d3script.js"){
    fs.readFile('scripts/d3script.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      return res.end();
    });
  }
  else if (req.url == '/d3-timeline.js'){
    fs.readFile('d3-timeline.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      return res.end();
    });
  }
  else

    res.end('invalid request');
    
}).listen(8080);