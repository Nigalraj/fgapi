const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryItemController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware,inventoryController.createInventoryItem);
router.put('/:inventoryitemid', authMiddleware,inventoryController.updateInventoryItem);
router.delete('/:InventoryItemId',authMiddleware, inventoryController.deleteInventoryItem);

module.exports = router;
