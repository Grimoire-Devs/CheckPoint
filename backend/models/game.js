const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    released: String,
    rating: Number,
    developers: String,
    coverImage: String,
    playTime: Number,
    platforms: { type: [String] },
    genre: { type: [String] },
  },
  { timestamps: true }
);

const gameDB = mongoose.model("game", gameSchema);
module.exports = gameDB;
