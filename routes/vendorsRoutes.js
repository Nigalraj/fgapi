const express = require('express');
const router = express.Router();
const Vendor = require('../models/vendors')

router.post('/', async (req, res) => {
    try {
        const defaultValues = {
            Active: false,
        };
        const vendorData = { ...defaultValues, ...req.body };
        const vendor = await Vendor.create(vendorData);
        res.status(201).json(vendor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/:VendorsId', async (req, res) => {
    const { VendorsId } = req.params;
    console.log(VendorsId);
    try {

        const vendor = await Vendor.findByPk(VendorsId);

        if (!vendor) {
            return res.status(404).json({ error: 'Vendor not found' });
        }
        await vendor.update(req.body);

        res.status(200).json(vendor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/isactive/:VendorsId', async (req, res) => {
    const { VendorsId } = req.params;

    try {
        const vendor = await Vendor.findByPk(VendorsId);
        if (!vendor) {
            return res.status(404).json({ error: 'Vendor not found' });
        }
        await vendor.update({ Active: true });
        res.status(200).json({ message: 'Vendor activated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router;
  