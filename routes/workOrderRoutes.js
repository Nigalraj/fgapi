const express = require('express');
const router = express.Router();
const workOrderController = require('../controllers/workOrderController');

router.post('/', workOrderController.createWorkOrder);
router.put('/:workOrderId', workOrderController.updateWorkOrder);
router.delete('/:workOrderId', workOrderController.deleteWorkOrder);

module.exports = router;
