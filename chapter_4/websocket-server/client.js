const fs = require("fs");
const http = require("http");
const index = fs.readFileSync("public/index.html");
// create server to retrieve information to my index.html
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(index);
});
// listen server 
server.listen(8080);

