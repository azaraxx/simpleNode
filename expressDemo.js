const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const urlEncodedParser = bodyParser.urlencoded({ extended: false });

const port = 8081;

app.get("/", (request, response) => {
  response.send("Hello World !");
});

app.get("/admin", (request, response) => {
  response.send("Admin Request");
});

app.get("/product*", (request, response) => {
  try {
    console.log("ID: " + request.query.id);
    console.log("Category ID: " + request.query.categoryid);
  } catch (error) {
    throw error;
  }

  response.send("Product Request");
});

app.post("/product", urlEncodedParser, (request, response) => {
  console.log(request.body.name);

  response.send("Post Request");
});
app.delete("/product", (request, response) => {
  response.send("Delete Request");
});
app.put("/product", (request, response) => {
  response.send("Put Request");
});

const server = app.listen(port, () => {
  console.log(`Server live`);
  console.log(`Listening port: ${port}`);
});
