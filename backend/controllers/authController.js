const userDB = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
exports.signup = async (req, res) => {
   try {
      const {name, email, password } = req.body;
      if (!name || !email || !password) {
         return res.status(400).json({ message: "Please fill all fields" });
      }
      if(!email.includes("@")){
         return res.status(400).json({ message: "Please enter a valid email" });
      }
      const existingUser = await userDB.findOne({ email });
      if (existingUser) {
         return res.status(400).json({ 
            success: false, 
            message: "User already exists" 
         });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await userDB.create({ name: name, email: email, password: hashedPassword });
      res.status(201).json({ message: "User created successfully", user });
   } 
   catch (error) {
      console.error(error);
      res.status(500).json({
         success: false,
         message: error.message,
      }); 
   }
}   

exports.signin = async (req, res) => {
   try {
      const { email, password } = req.body;
      if (!email || !password) {
         return res.status(400).json({ message: "Please fill all fields" });
      }
      const user = await userDB.findOne({ email });
      if (!user) {
         return res.status(400).json({
            success: false,
            message: "User not found, Kindly signup first" 
         });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
         return res.status(400).json({ message: "Invalid password"});
      }
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
      res.status(200).json({ token });
   }
   catch(error){
      console.error(error);
      res.status(500).json({
         success: false,
         message: error.message,
      });
   }
}
