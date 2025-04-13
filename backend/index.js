const express = require("express");
const cron = require("node-cron");
const { fetchAndUpdate, databaseConnect } = require("./connection");
const cookieParser = require("cookie-parser");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cookieParser());
const PORT = process.env.PORT || 8000;

databaseConnect();

app.get("/", (req, res) => {
  res.send("Hello!!");
});

app.use(express.json());
app.use("/api/v1", require("./routes/userRoute"));

app.listen(PORT, () => {
  console.log("Server Running Successfully " + PORT + "!!");
});

cron.schedule("0 0 * * *", async () => {
  console.log("Updating Game Data");
  await fetchGames(25);
});
