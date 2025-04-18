const User = require("../models/user");
const crypto = require("crypto");

const generateRandomString = ()=>{
  const suffix = crypto.randomBytes(3).toString("hex");
  console.log("Generated Suffix:", suffix);
  return suffix;
}

async function generateUniqueUserName(baseName) {
  let userName = baseName.toLowerCase().replace(/\s+/g, "");
  let exists = await User.findOne({ userName });
  while (exists) {
    const suffix = generateRandomString();
    userName = `${baseName.toLowerCase()}${suffix}`;
    exists = await User.findOne({ userName });
  }
  return userName;
}

exports.Oauth = async (req, res) => {
  try {
    const user = req.user;

    if (!user.userName) {
      const firstName = user.name?.split(" ")[0] || "user";
      const uniqueUserName = await generateUniqueUserName(firstName);
      user.userName = uniqueUserName;
      await user.save();
    }

    res.redirect("/profile");
  } catch (err) {
    console.error("Error setting userName:", err);
    res.redirect("/login");
  }
};