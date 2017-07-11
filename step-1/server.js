const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function(request,response) {
  
  var pathname = url.parse(request.url).pathname;

  fs.readFile(pathname.substr(1),function(err,data) {
    if (err) {
        console.log(err);
        response.writeHead(404, {'Content-Type': 'text/html'});
    } else {
        response.writeHead(200, {'Content-Type':'text/html'});

        response.write(data.toString());
    }
    response.end();
  });
}).listen(8080);

console.log('Server running at http://10.210.84.200:8080/');