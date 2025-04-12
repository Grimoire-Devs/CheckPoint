const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello Brother!!");
});

app.listen(PORT, () => {
  console.log("Server Running Successfully " + PORT + "!!");
});
