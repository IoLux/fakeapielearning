const express = require("express");
const app = express();
const postUser = require("./json/postUser.json");
const users = require("./json/user.json");
// const port = 5000;

// define the first route
app.get("/postUser", function (req, res) {
  res.json(postUser);
});

app.get("/user", (req, res, next) => {
  res.json(users);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("IT WORK");
});
