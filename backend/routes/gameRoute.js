const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Game = require("../models/game");

router.get("/:id", async (req, res) => {
  const gameId = new mongoose.Types.ObjectId(req.params.id);
  // console.log(gameId);
  try {
    const game = await Game.findById(gameId);
    if (!game) {
      return res.json({ error: "game not found!!" });
    }
    // console.log(game);
    res.json({ game: game });
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.get("/:id/reviews", async (req, res) => {
  const gameId = new mongoose.Types.ObjectId(req.params.id);
  try {
    const game = await Game.findById(gameId).populate({
      path: "reviews",
      populate: { path: "createdBy", select: "userName" },
    });
    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }
    res.json({ reviews: game.reviews });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
