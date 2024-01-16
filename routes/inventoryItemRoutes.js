const express = require('express');
const router = express.Router();
const InventoryItems = require('../models/InventoryItems');

router.post('/', async (req, res) => {
    try {
        const newLead = await InventoryItems.create(req.body);
        res.status(201).json(newLead);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
});

router.put('/:inventoryitemid', async (req, res) => {
    const InventoryItemId = req.params;
    try {
      const InventoriesItems = await InventoryItems.findByPk(InventoryItemId.inventoryitemid);
      
      if (!InventoriesItems) {
        return res.status(404).json({ error: 'Inventory not found' });
      }
      await InventoriesItems.update(req.body);
      res.json(InventoriesItems);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete('/:InventoryItemId', async (req, res) => {
    const inventoryItemId = req.params.InventoryItemId;
  
    try {
      const inventoryItem = await InventoryItems.findByPk(inventoryItemId);

      if (!inventoryItem) {
        return res.status(404).json({ error: 'InventoryItem not found' });
      }
      await inventoryItem.destroy();
      res.json({ message: 'InventoryItem deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

module.exports = router;