const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  favourites: {
    type: [
      {
        game: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "game",
          unique: true,
        },
        addedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    default: [
      { game: null, addedAt: Date.now() },
      { game: null, addedAt: Date.now() },
      { game: null, addedAt: Date.now() },
      { game: null, addedAt: Date.now() },
    ],
  },
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
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user",
      }
  ],
  followings: [
    {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user",
    }
  ]
});

const Profile = mongoose.model("profile", profileSchema);
module.exports = Profile;
