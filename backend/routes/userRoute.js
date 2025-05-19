const express = require("express");
const router = express.Router();
const { signup, signin } = require("../controllers/authController");
const { logout } = require("../controllers/authController");
const verifyUser = require("../middlewares/auth");
const {forgotPassword, resetPassword} = require("../controllers/authController");   

router.post("/signup", signup);

router.post("/signin", signin);

// router.get("/profile", verifyUser, async (req, res) => {
//   try {
//     res.status(200).json(req.user);
//    //  console.log(req.user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// }); //profile controller

router.get("/logout", logout);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);


module.exports = router;
