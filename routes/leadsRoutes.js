const express = require('express');
const router = express.Router();
const leadsController = require('../controllers/leadsController');

router.get('/opportunity/active', leadsController.getActiveOpportunities);
router.get('/opportunity/inactive', leadsController.getInactiveOpportunities);
router.put('/:id/updateOpportunity', leadsController.updateOpportunityStatus);
router.post('/', leadsController.createLead);
router.post('/post', leadsController.createLeadWithUser);

module.exports = router;
