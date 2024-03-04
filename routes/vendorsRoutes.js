const express = require('express');
const router = express.Router();
const vendorsController = require('../controllers/vendorsController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/',authMiddleware, vendorsController.createVendor);
router.put('/isactive/:id', authMiddleware,vendorsController.activateVendor);
router.put('/:id', authMiddleware,vendorsController.updateVendor);

module.exports = router;