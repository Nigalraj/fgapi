const express = require('express');
const router = express.Router();
const leadsController = require('../controllers/leadsController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/opportunity/active', authMiddleware,leadsController.getActiveOpportunities);
router.get('/opportunity/inactive',authMiddleware, leadsController.getInactiveOpportunities);
router.put('/:id/updateOpportunity',authMiddleware, leadsController.updateOpportunityStatus);
router.post('/', authMiddleware,leadsController.createLead);
router.post('/post', authMiddleware,leadsController.createLeadWithUser);

module.exports = router;
