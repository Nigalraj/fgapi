const Vendor = require('../models/vendors');

const createVendor = async (req, res) => {
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
};

const updateVendor = async (req, res) => {
    const  VendorsId  = req.params.id;
    try {
        const vendor = await Vendor.findByPk(VendorsId);
        console.log(vendor);
        if (!vendor) {
            return res.status(404).json({ error: 'Vendor not found' });
        }
        await vendor.update(req.body);
        res.status(200).json(vendor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const activateVendor = async (req, res) => {
    const VendorId = req.params.id;

    try {
        const id = parseInt(VendorId, 10);

        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid VendorId' });
        }

        const vendor = await Vendor.findByPk(id);

        if (!vendor) {
            return res.status(404).json({ error: 'Vendor not found' });
        }

        await vendor.update({ Active: true });
        res.status(200).json({ message: 'Vendor activated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = {
   activateVendor,
   updateVendor,
   createVendor
};