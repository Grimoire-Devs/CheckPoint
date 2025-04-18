const express = require("express");
const router = express.Router();
const { signup, signin } = require("../controllers/authController");
const {logout} = require("../controllers/authController")
router.post("/signup", signup);
router.post("/signin", signin);
router.get("/profile", async (req, res) => {
   try {
      res.status(200).json(req.user);
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
   }
});
// Logout route
router.get("/logout", logout);
module.exports = router;