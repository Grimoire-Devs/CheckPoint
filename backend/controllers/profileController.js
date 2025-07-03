const Profile = require("../models/profile");

const POPULATE_PATHS = [
  "user",
  "favourites.game",
  "lists.list",
  "wishlist.game",
  {
    path: "reviews.review",
    populate: [
      { path: "game", model: "game" },
      { path: "createdBy", model: "user" }
    ]
  }
];

const handleGetProfile = async function (req, res) {
  const user = req.user;
  if (!user) {
    return res
      .status(400)
      .json({ status: 400, message: "Login Again to Continue..." });
  }
  try {
    const userProfile = await Profile.findOne({ user: user._id });
    if (!userProfile) {
      return res
        .status(404)
        .json({ status: 404, message: "Profile not found" });
    }
    await userProfile.populate(POPULATE_PATHS);
    return res.status(200).json({ profile: userProfile });
  } catch (e) {
    return res.status(500).json({ error: `Error occurred ${e}` });
  }
};

const handleCreateProfile = async function (userId) {
  let userProfile = await Profile.findOne({ user: userId });
  if (userProfile != null) {
    return;
  } else {
    userProfile = await Profile.create({ user: userId });
    await userProfile.populate("user");
    return;
  }
};

const handleUpdateFavs = async function (req, res) {
  const user = req.user;
  const favs = req.body.favs;

  if (!user) {
    return res
      .status(400)
      .json({ status: 400, message: "Login Again to Continue..." });
  }

  // Build the new favourites array in the correct order
  const newFavourites = favs.map((fav) => ({
    game: fav.game ? fav.game._id || fav.game : null,
    addedAt: Date.now(),
  }));

  await Profile.updateOne(
    { user: user._id },
    { $set: { favourites: newFavourites } }
  );

  const updatedProfile = await Profile.findOne({ user: user._id });
  await updatedProfile.populate(POPULATE_PATHS);
  res.status(200).json({ status: 200, Profile: updatedProfile });
};

const handleDeleteFav = async function (req, res) {
  const user = req.user;
  const fav = req.body.favs[0];

  if (!user) {
    return res
      .status(400)
      .json({ status: 400, message: "Login Again to Continue..." });
  }
  await Profile.updateOne(
    { [`favourites.${fav.id}`]: { $exists: true } },
    { $unset: { [`favourites.${fav.id}`]: {} } }
  );
  const userProfile = await Profile.findOne({ user: user._id });
  await userProfile.populate(POPULATE_PATHS);
  return res.status(201).json({ message: "deleted", Profile: userProfile });
};

module.exports = {
  handleGetProfile,
  handleCreateProfile,
  handleUpdateFavs,
  handleDeleteFav,
};
