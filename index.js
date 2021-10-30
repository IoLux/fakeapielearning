const express = require("express");
const app = express();
const data = require("./json/postUser.json");
// const port = 5000;

// define the first route
app.get("/postUser", function (req, res) {
  res.json(data);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("IT WORK");
});
