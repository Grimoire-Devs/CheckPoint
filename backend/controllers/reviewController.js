const Review = require("../models/review");
const Game = require("../models/game");
const Profile = require("../models/profile");
const mongoose = require("mongoose");

const logGame = async (req, res) => {
  const { reviewText, rating, liked, tags } = req.body;
  const gameId = new mongoose.Types.ObjectId(req.params.id);
  const user = req.user;
  try {
    const review = await Review.create({
      reviewText: reviewText,
      rating: rating,
      liked: liked,
      createdBy: user._id,
      tags: tags,
      game: gameId,
    });

    await Game.findOneAndUpdate(gameId, {
      $push: { reviews: review._id },
    });

    await Profile.findOneAndUpdate(
      { user: user._id },
      {
        $push: { reviews: review._id },
      }
    );

    res.json({ message: "game logged successfully" + review });
  } catch (err) {
    res.json({ error: err.message });
  }
};

const getGameReview = async (req, res) => {
  const reviewId = new mongoose.Types.ObjectId(req.params.id);
  try {
    const review = await Review.findById(reviewId);
    if (!review) {
      throw error;
    }
    res.json({ review: review });
  } catch (err) {
    res.json({ error: err.message });
  }
};

const deleteGameReview = async (req, res) => {
  const reviewId = new mongoose.Types.ObjectId(req.params.id);
  try {
    const review = await Review.findById(reviewId);
    const userId = new mongoose.Types.ObjectId(review.createdBy);

    if (userId.toString() !== req.user._id.toString()) {
      return res.json({ error: "access denied" });
    }

    const gameId = new mongoose.Types.ObjectId(review.game);
    await Review.findOneAndDelete(reviewId);

    await Game.findOneAndUpdate(gameId, {
      $pull: { reviews: reviewId },
    });

    await Profile.findOneAndUpdate(
      { user: userId },
      {
        $pull: { reviews: reviewId },
      }
    );
    res.json({ message: "Review Deleted!!" });
  } catch (err) {
    res.json({ error: err.message });
  }
};

const updateGameReview = async (req, res) => {
  const reviewId = new mongoose.Types.ObjectId(req.params.id);
  const updatedReview = req.body;
  try {
    const oldReview = await Review.findById(reviewId);
    const userId = oldReview.createdBy;
    if (userId.toString() !== req.user._id.toString()) {
      return res.json({ error: "access denied" });
    }

    await Review.findOneAndUpdate(
      reviewId,
      { $set: updatedReview },
      { new: true }
    );
    res.json({ success: "review updated" });
  } catch (err) {
    res.json({ error: err.message });
  }
};

module.exports = {
  logGame,
  getGameReview,
  deleteGameReview,
  updateGameReview,
};
