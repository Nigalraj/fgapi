const express = require('express');
const router = express.Router();
const estimatesController = require('../controllers/estimatesController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/',authMiddleware, estimatesController.createEstimate);
router.put('/locked/:estimateid',authMiddleware, estimatesController.lockEstimate);
router.put('/:estimateid',authMiddleware, estimatesController.updateEstimate);
router.post('/changeorder',authMiddleware, estimatesController.createChangeOrder);
router.post('/duplicateestimate/:estimateId',authMiddleware, estimatesController.duplicateEstimate);
router.put('/defaultestimate/:estimateid', authMiddleware,estimatesController.setDefaultEstimate);
router.get('/',authMiddleware,estimatesController.getAll);

module.exports = router;