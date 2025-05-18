const express = require("express");
const router = express.Router();
const Profile = require('../models/profile');
const verifyUser = require('../middlewares/auth');

const {handleGetProfile } = require('../controllers/profileController');
const { handleUpdateFavs, handleDeleteFav } = require('../controllers/profileController');

router.get('/', verifyUser, handleGetProfile);
router.route('/fav')
.post(verifyUser,handleUpdateFavs)
.delete(verifyUser, handleDeleteFav);

module.exports = router;