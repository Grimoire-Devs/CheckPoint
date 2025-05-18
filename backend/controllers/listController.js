const Profile = require("../models/profile");
const User = require("../models/user");
const List = require("../models/list");

const handleGetList = async function (req, res) {
  const user = req.user;
  const listId = req.params.id;
  const list = await List.findById(listId).populate([
    "createdBy",
    "listItems.game",
  ]);
  return res.status(200).json({ list: list });
};

const handleCreateList = async function (req, res) {
  const user = req.user;
  const listDetails = req.body.listDetails;
  console.log(listDetails);
  const list = await List.create({
    title: listDetails.title,
    tags: listDetails.tags.map((tag) => tag.toLowerCase()),
    createdBy: user._id,
    listItems: [],
    whoCanView: listDetails.whoCanView,
    description: listDetails.description,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  });
  await list.populate("createdBy");
  return res.status(201).json({ list: list });
};

const handleUpdateList = async function (req, res) {
  const user = req.user;
  listId = req.params.id;
  const listDetails = req.body.listDetails;
  const list = await List.findById(listId);
  if (!list) {
    res.status(404).json({ error: "List Not Found" });
  }
  list.title = listDetails.title;
  list.description = listDetails.description;
  list.whoCanView = listDetails.whoCanView;
  list.tags = listDetails.tags;
  list.updatedAt = Date.now();
  await list.save();
  await list.populate("createdBy");
  await list.populate("listItems.game");
  return res.status(200).json({ list: list });
};

const handleDeleteList = async function (req, res) {
  const user = req.user;
  const listId = req.params.id;
  //   console.log(listId);
  const list = await List.findById(listId);
  //   console.log(list);
  if (!list) {
    return res.status(404).json({ error: "List Not Found" });
  }
  if (list.createdBy.toString() !== user._id.toString()) {
    return res
      .status(403)
      .json({ error: "You are not allowed to delete this list" });
  }
  await List.findByIdAndDelete(listId);
  //   console.log("deleted");
  await Profile.updateMany(
    { "lists._id": listId },
    { $pull: { lists: { _id: listId } } }
  );

  return res.status(200).json({ message: "List Deleted Successfully" });
};

const handleAddToList = async function (req, res) {
  const user = req.user;
  const listId = req.params.id;
  const list = await List.findById(listId);
  console.log(list);
  console.log(list.listItems);
  const games = req.body.games;
  games.forEach((game) => {
    const gameId = game.toString();

    const alreadyInList = list.listItems.find(
      (item) => item.game.toString() === gameId
    );

    if (!alreadyInList && gameId !== "") {
      //   console.log("pushing");
      list.listItems.push({
        game: game,
        addedAt: Date.now(),
      });
    }
  });

  list.updatedAt = Date.now();
  await list.save();
  await list.populate(["createdBy", "listItems.game"]);
  return res.status(200).json({ list: list });
};

const handleRemoveFromList = async function (req, res) {
  const user = req.user;
  const listId = req.params.id;
  try {
    const list = await List.findById(listId);
    const game = req.body.games;
    list.listItems.pull(
      list.listItems.find((item) => item.game._id.toString() == game.toString())
    );
    list.updatedAt = Date.now();
    await list.save();
    await list.populate(["createdBy", "listItems.game"]);
    return res.status(200).json({ list: list });
  } catch (err) {
    return res.status(400).json({ error: "List Not Found" });
  }
};

module.exports = {
  handleGetList,
  handleCreateList,
  handleUpdateList,
  handleDeleteList,
  handleAddToList,
  handleRemoveFromList,
};
