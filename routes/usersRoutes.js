const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');

router.post('/', usersController.createUser);
router.get('/:id', usersController.activateUser);

module.exports = router;
