const express = require("express");
const app = express();

app.get("/greeting", function (req, res) {
  var name = req.query.name;
  res.send("Hi " + name);
});
app.get("/", function (req, res) {
  res.send("Hi there!!!");
});

app.listen(8080);
