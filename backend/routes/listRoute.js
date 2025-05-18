const express = require('express');
const router = express.Router();
const verifyUser = require('../middlewares/auth');

const { handleGetList, handleCreateList, handleUpdateList, handleDeleteList } = require('../controllers/listController'); 
const {handleAddToList, handleRemoveFromList} = require('../controllers/listController');

router.post('/create', verifyUser, handleCreateList);

router.route('/:id')
.get(verifyUser, handleGetList)
.patch(verifyUser, handleUpdateList)
.delete(verifyUser, handleDeleteList);

router.patch('/:id/add', verifyUser, handleAddToList);
router.patch('/:id/remove', verifyUser, handleRemoveFromList);

module.exports = router;