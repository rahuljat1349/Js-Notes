const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
 if (req.url === "/hello") {
     res.statusCode = 200;
     res.setHeader("Content-Type", "text/plain");
     res.end("Hello from Node server!");
 }else{
     res.statusCode = 404;
     res.setHeader("Content-Type", "text/plain");
     res.end("404 Not Found!");
 }
});

server.listen(port, hostname, () => {
  console.log("server is listening on port : ", port);
});
