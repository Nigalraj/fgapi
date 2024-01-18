const express = require('express');
const router = express.Router();
const estimatesController = require('../controllers/estimatesController');

router.post('/', estimatesController.createEstimate);
router.put('/locked/:estimateid', estimatesController.lockEstimate);
router.put('/:estimateid', estimatesController.updateEstimate);
router.post('/changeorder', estimatesController.createChangeOrder);
router.post('/duplicateestimate/:estimateId', estimatesController.duplicateEstimate);
router.put('/defaultestimate/:estimateid', estimatesController.setDefaultEstimate);

module.exports = router;
