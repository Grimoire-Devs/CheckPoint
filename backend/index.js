const express = require("express");
const cron = require("node-cron");
const cors = require("cors");
const session = require("express-session");
const { fetchAndUpdate, databaseConnect } = require("./connection");
const cookieParser = require("cookie-parser");
const passport = require("./passport");
const dotenv = require("dotenv");
const { Oauth } = require("./middlewares/oauth");
dotenv.config();

const app = express();

app.use(cookieParser());
const PORT = process.env.PORT || 8000;
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(passport.initialize());
app.use(passport.session());

databaseConnect();

app.get("/", (req, res) => {
  res.send("Hello!!");
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
  }),
  Oauth
);

// const Games = require("./models/game");
// app.get("/games", async (req, res) => {
//   const latestGames = await Games.find().limit(50).sort({ released: -1 });
//   const topRatedGames = await Games.find().limit(50).sort({ rating: -1 });
//   res.send({ latestGames, topRatedGames });
// });

app.use(cors());
app.use(express.json());
app.use("/", require("./routes/userRoute"));

app.listen(PORT, () => {
  console.log("Server Running Successfully " + PORT + "!!");
});

cron.schedule("0 0 * * *", async () => {
  console.log("Updating Game Data");
  await fetchAndUpdate(25);
});
