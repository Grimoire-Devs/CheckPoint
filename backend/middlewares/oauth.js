const User = require("../models/user");

async function generateUniqueUserName(baseName) {
  let userName = baseName.toLowerCase().replace(/\s+/g, "");
  let exists = await User.findOne({ userName });
  let counter = 1;

  while (exists) {
    userName = `${baseName.toLowerCase()}${counter}`;
    exists = await User.findOne({ userName });
    counter++;
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



