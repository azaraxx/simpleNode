const http = require("http");
const log = require("./log.js");
const sayHello = require("./exportsDemo");

http
  .createServer((request, response) => {
    if (request.url == "/admin") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(
        `<html> <head></head> <body> <strong>Admin Page</strong> </body> </html>`
      );
    } else if (request.url == "/") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(
        `<html> <head></head> <body> <strong>Home Page</strong> </body> </html>`
      );
    } else if (request.url == "/customer") {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.write(JSON.stringify({ name: "David", lastName: "Beckham" }));
    }

    response.end();
  })
  .listen(8081);

log.information("Server is live");

console.log(sayHello());
