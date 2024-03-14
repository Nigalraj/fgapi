const express = require('express');
const router = express.Router();
const calenderController = require('../controllers/calenderController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/',authMiddleware, calenderController.createCalender);
router.get('/',authMiddleware, calenderController.getAll);

module.exports = router;
