const express = require("express");
const app = express();

app.get("/greeting", function (req, res) {
  var name = req.query.name;
  res.send("Hello " + name);
});
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);
