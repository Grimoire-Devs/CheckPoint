const Profile = require("../models/profile");

const handleGetProfile = async function (req, res) {
  const user = req.user;
  if (!user) {
    return res
      .status(400)
      .json({ status: 400, message: "Login Again to Continue..." });
  }
  try {
    const userProfile = await Profile.findOne({ user: user._id }); // console.log("profile",userProfile);
    return res.status(200).json({ profile: userProfile });
  } catch (e) {
    return res.status(500).json({ error: `Error occurred ${e}` });
  }
};

const handleCreateProfile = async function (userId) {
  let userProfile = await Profile.findOne({ user: userId });
  //   console.log(userProfile);
  if (userProfile != null) {
    return;
  } else {
    userProfile = await Profile.create({
      user: userId,
    });
    await userProfile.populate("user");
    return;
    // console.log(userProfile);
  }
  return;
};

const handleUpdateFavs = async function (req, res) {
  const user = req.user;
  const favs = req.body.favs;
  // console.log(favs);

  if (!user) {
    return res
      .status(400)
      .json({ status: 400, message: "Login Again to Continue..." });
  }
  const userProfile = await Profile.findOne({ user: user._id });
  try {
    const update = {};
    favs.forEach((fav) => {
      update[`favourites.${fav.id}`] = {
        game: fav.gameId,
        addedAt: Date.now(),
      };
    });

    await Profile.updateOne({ user: user._id }, { $set: update });

    const updatedProfile = await Profile.findOne({ user: user._id }).populate(
      "favourites.game"
    );

    return res.status(201).json({
      message: "Updated Favourites",
      Profile: updatedProfile,
    });
  } catch (e) {
    return res.json({ error: `Error occurred ${e}` });
  }
};

const handleDeleteFav = async function (req, res) {
  const user = req.user;
  const fav = req.body.favs[0];

  if (!user) {
    return res
      .status(400)
      .json({ status: 400, message: "Login Again to Continue..." });
  }
  const userProfile = await Profile.findOne({ user: user._id });
  userProfile.favourites[fav.id] = { game: null, addedAt: Date.now() };
  await userProfile.save();
  return res.status(201).json({ message: "deleted", Profile: userProfile });
};

module.exports = {
  handleGetProfile,
  handleCreateProfile,
  handleUpdateFavs,
  handleDeleteFav,
};
