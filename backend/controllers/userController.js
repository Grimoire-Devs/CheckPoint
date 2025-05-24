const User = require('../models/user');

// Follow a user
exports.followUser = async (req, res) => {
  try {
    const userId = req.user._id; 
    console.log(req.user);
    console.log(userId);// ID of the logged-in user
    const targetUserId = req.params.id; // ID of the user to follow

    if (userId === targetUserId) {
      return res.status(400).json({ message: "You can't follow yourself." });
    }

    const user = await User.findById(userId);
    const targetUser = await User.findById(targetUserId);

    if (!targetUser) return res.status(404).json({ message: "User not found" });

    if (user.following.includes(targetUserId)) {
      return res.status(400).json({ message: "Already following" });
    }

    user.following.push(targetUserId);
    targetUser.followers.push(userId);

    await user.save();
    await targetUser.save();

    res.status(200).json({ message: "Followed successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Unfollow a user
exports.unfollowUser = async (req, res) => {
  try {
    const userId = req.user._id;
    const targetUserId = req.params.id;

    const user = await User.findById(userId);
    const targetUser = await User.findById(targetUserId);

    if (!targetUser) return res.status(404).json({ message: "User not found" });

    user.following = user.following.filter(id => id.toString() !== targetUserId);
    targetUser.followers = targetUser.followers.filter(id => id.toString() !== userId);

    await user.save();
    await targetUser.save();

    res.status(200).json({ message: "Unfollowed successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get followers list
exports.getFollowers = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('followers', 'name userName');
    res.json({ followers: user.followers });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get following list
exports.getFollowing = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('following', 'name userName');
    res.json({ following: user.following });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


