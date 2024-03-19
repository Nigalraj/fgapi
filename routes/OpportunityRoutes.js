const express = require('express');
const router = express.Router();
const OpportunitiesController = require('../controllers/OpportunitiesController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/',authMiddleware, OpportunitiesController.createOpportunities);
router.get('/',authMiddleware,OpportunitiesController.getAll);

module.exports = router;