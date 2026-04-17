const http = require("http");

const server = http.createServer((req, res) => {
  // console.log("req object", req);
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("hello node js from http module");
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
