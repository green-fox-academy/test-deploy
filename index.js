const http = require('http');

const server = http.createServer((req, res) => {
  res.end('APPLE');
});

server.listen(8080);
