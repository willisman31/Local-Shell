const http = require('http');
const os = require('os');
const fs = require('fs');
const port = 3000;
const host = os.hostname();

const index = fs.readFileSync('./index.html', 'utf-8');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(index);
});

server.listen(port, () => {
  console.log(`Server running at http://${host}:${port}/`);
});