const InventoryItems = require('../models/InventoryItems');

const createInventoryItem = async (req, res) => {
    try {
        const newLead = await InventoryItems.create(req.body);
        res.status(201).json(newLead);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const updateInventoryItem = async (req, res) => {
    const inventoryItemId = req.params.inventoryitemid;
    try {
        const inventoryItem = await InventoryItems.findByPk(inventoryItemId);

        if (!inventoryItem) {
            return res.status(404).json({ error: 'InventoryItem not found' });
        }

        await inventoryItem.update(req.body);
        res.json(inventoryItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const deleteInventoryItem = async (req, res) => {
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
};



module.exports = {
    deleteInventoryItem,
    updateInventoryItem,
    createInventoryItem
};