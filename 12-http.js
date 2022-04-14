const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Welcome to our about page");
  }
  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page!</p>
    <a href="/">Back to home page</a>
  `);
});

server.listen(5000); // port
