const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
   {
      name: {
         type: String,
      },
      userName: {
         type: String,
         unique: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
      },
      password: {
         type: String,
      },
      googleId: {
         type: String,
      },
   },
   { timestamps: true }
);

const User = mongoose.model("user", userSchema);
module.exports = User;

