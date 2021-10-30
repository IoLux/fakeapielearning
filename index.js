const express = require("express");
const app = express();
const port = 5000;

// use the express-static middleware
app.use(express.static("public"));

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => {
  console.log("IT WORK");
});
