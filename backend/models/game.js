const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    id: Number,
    title: { type: String, required: true },
    released: String,
    rating: Number,
    coverImage: String,
    playTime: Number,
    platforms: [String],
    genre: [String],
    description: String,
    metacritic: Number,
    ratings_count: Number,
    website: String,
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "review",
      },
    ],
    createdAt: Date,
    updatedAt: Date,
  },
  { timestamps: true }
);

const Game = mongoose.model("game", gameSchema);
module.exports = Game;
