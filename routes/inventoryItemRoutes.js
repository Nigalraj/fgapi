const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryItemController');

router.post('/', inventoryController.createInventoryItem);
router.put('/:inventoryitemid', inventoryController.updateInventoryItem);
router.delete('/:InventoryItemId', inventoryController.deleteInventoryItem);

module.exports = router;
