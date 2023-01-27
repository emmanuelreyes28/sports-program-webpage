const express = require("express");
const app = express();
const axios = require("axios");
require("dotenv").config();

app.get("/", function (req, res) {
  res.send("Server is up!");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
