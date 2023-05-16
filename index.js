const express = require("express");
const app = express();
var cors = require("cors");
const port = 3000;

app.use(cors());

const categories = require("./categories.json");

app.get("/", (req, res) => {
  res.send("The port is running");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
