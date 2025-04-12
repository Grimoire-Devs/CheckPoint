const mongoose = require("mongoose");
const axios = require("axios");
const gameDB = require("./models/game");

const dotenv = require("dotenv");
dotenv.config();

const databaseConnect = async () => {
  await mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Database Connected Successfully");
    })
    .catch((err) => {
      console.log("Error Connecting to Database" + err);
    });
};

const BASE_URL = `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&ordering=-added&page_size=40`;

const fetchAndUpdate = async (pages = 5) => {
  await mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Database Connected Successfully By Cron");
  });
  for (let i = 1; i <= pages; i++) {
    // console.log("getting data" + i);
    const { data } = await axios.get(`${BASE_URL}&page=${i}`);
    for (const game of data.results) {
      const gameData = {
        id: game.id,
        title: game.name,
        released: game.released,
        rating: game.rating,
        playTime: game.playtime,
        genres: game.genres.map((g) => g.name),
        platforms: game.platforms?.map((p) => p.platform.name),
        coverImage: game.background_image,
      };
      //   console.log(gameData + "" + i);
      const existingGame = await gameDB.findOne({ id: game.id });
      if (!existingGame) {
        await gameDB.create(gameData);
        // console.log("data created");
      }
    }
  }
  mongoose.disconnect().then(() => {
    console.log("Database Disconnected");
  });
};

if (require.main == module) {
  fetchAndUpdate(25);
}

module.exports = { databaseConnect, fetchAndUpdate };
