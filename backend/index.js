const express = require("express");
const cron = require("node-cron");
const { fetchAndUpdate, databaseConnect } = require("./connection");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

databaseConnect();

app.get("/", (req, res) => {
  res.send("Hello!!");
});

app.listen(PORT, () => {
  console.log("Server Running Successfully " + PORT + "!!");
});

cron.schedule("0 0 * * *", async () => {
  console.log("Updating Game Data");
  await fetchGames(250);
});
