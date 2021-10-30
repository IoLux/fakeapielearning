const express = require("express");
const app = express();
const port = 5000;

// define the first route
app.get("/", function (req, res) {
  res.send("HELLo");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("IT WORK");
});
