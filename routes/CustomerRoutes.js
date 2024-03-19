const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/',authMiddleware, customerController.createCustomer);
router.get('/',authMiddleware, customerController.getAll);

module.exports = router;