const express = require('express');
const router = express.Router();
const workOrderController = require('../controllers/workOrderController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware,workOrderController.createWorkOrder);
router.put('/:workOrderId', authMiddleware,workOrderController.updateWorkOrder);
router.delete('/:workOrderId',authMiddleware, workOrderController.deleteWorkOrder);

module.exports = router;