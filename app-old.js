const http = require('http');

http.createServer((req, resp) => {
    resp.writeHead(200, {})
    resp.write('Helo world');
    resp.end()
}).listen(8080);

console.log('escuchndo el 8080');