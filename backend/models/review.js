const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  reviewText: {
    type: String,
  },
  game: {
    type: Schema.Types.ObjectId,
    ref: "game",
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "user", 
    required: true,
  },
  liked: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

const Review = mongoose.model("review", reviewSchema);
module.exports = Review;
