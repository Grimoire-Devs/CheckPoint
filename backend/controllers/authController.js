const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
const { handleCreateProfile } = require("./profileController");
dotenv.config();

exports.signup = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      return res.status(400).json({
        message: "Please fill all fields or kindly try different username",
      });
    }
    if (!email.includes("@")) {
      return res.status(400).json({ message: "Please enter a valid email" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      userName: userName,
      email: email,
      password: hashedPassword,
    });
    handleCreateProfile(user._id);
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password, userName } = req.body;
    if ((!email && !userName) || !password) {
      return res.status(400).json({
        message: "Please provide either email or username, and a password.",
      });
    }
    let user;
    if (email) {
      user = await User.findOne({ email });
    } else if (userName) {
      user = await User.findOne({ userName });
    }
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found, Kindly signup first",
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const payload = user.toObject();
    console.log(payload);
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    const userObj = user.toObject();
    userObj.token = token;
    userObj.password = undefined;
    // console.log("User logged in successfully", userObj);

    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
    };

    res.cookie("token", token, options).status(200).json({
      success: true,
      user: userObj,
      message: "User Logged in successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.logout = async (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);

    req.session?.destroy((err) => {
      if (err) return next(err);

      res.clearCookie("token");
      res.clearCookie("connect.sid");
      console.log("User logged out successfully");
      res.redirect("/");
    });
  });
};
