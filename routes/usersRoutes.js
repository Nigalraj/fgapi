const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', usersController.createUser);
router.get('/:id', authMiddleware,usersController.activateUser);
router.post('/login', usersController.loginUser);

module.exports = router;
