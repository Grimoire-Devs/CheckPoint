const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  favourites: [
    {
      game: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "game",
        required: true,
      },
      addedAt: { type: Date, default: Date.now },
    },
  ],
  reviews: [
    {
      review: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "review",
        required: true,
      },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  lists: [
    {
      list: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "list",
        required: true,
      },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  wishlist: [
    {
      game: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "game",
        required: true,
      },
      addedAt: { type: Date, default: Date.now },
    },
  ],
  followers: [
    {
      follower: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user",
      },
    },
  ],
  followings: [
    {
      following: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user",
      },
    },
  ],
});

const Profile = mongoose.model('profile', profileSchema);
module.exports = Profile;