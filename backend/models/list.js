const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  description: String,
  listItems: [
    {
      game: {
        type: Schema.Types.ObjectId,
        ref: "game",
        required: true,
      },
      addedAt: { type: Date, default: Date.now },
    },
  ],
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

const listDB = mongoose.model("list", listSchema);
module.exports = listDB;
