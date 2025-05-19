const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Game = require("../models/game");

router.get("/latest", async (req, res) => {
  try {
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    const todayStr = today.toISOString().slice(0, 10);
    const games = await Game.find({ released: { $lt: todayStr } })
      .sort({ released: -1 })
      .limit(18);
    res.json({ games });
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.get("/upcoming", async (req, res) => {
  try {
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    const todayStr = today.toISOString().slice(0, 10);
    const games = await Game.find({ released: { $gt: todayStr } })
      .sort({ released: 1 })
      .limit(18);
    res.json({ games });
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.get("/top-rated", async (req, res) => {
  try {
    const games = await Game.find().sort({ rating: -1 }).limit(18);
    res.json({ games });
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.get("/popular", async (req, res) => {
  try {
    const games = await Game.find().sort({ _id: 1 }).limit(18);
    res.json({ games });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  const gameId = new mongoose.Types.ObjectId(req.params.id);
  try {
    const game = await Game.findById(gameId);
    if (!game) {
      return res.json({ error: "game not found!!" });
    }
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
