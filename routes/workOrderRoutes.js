const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const WorkOrders = require('../models/WorkOrders');
const Estimates = require('../models/estimates');

  
router.post('/', async (req, res) => {
    try {
      const { LeadsId} = req.body;
  
      const readyEstimate = await Estimates.findOne({
        where: {
          LeadsId,
          ReadyForWorker: true,
        },
      });

      console.log(readyEstimate.ReadyForWorker,"uhhghg");
  
      if (!readyEstimate) {
        return res.status(400).json({ error: 'No ready estimate found for the provided LeadsId' });
      }
 
      const workOrder = await WorkOrders.create(req.body);
      res.status(201).json(workOrder );
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.put('/:workOrderId', async (req, res) => {
    const { workOrderId } = req.params;
    try {
      const workOrder = await WorkOrders.findByPk(workOrderId);
  
      if (!workOrder) {
        return res.status(404).json({ error: 'WorkOrder not found' });
      }
  
      await workOrder.update(req.body);
  
      res.json(workOrder);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

router.delete('/:workOrderId', async (req, res) => {
    const {workOrderId} = req.params;
  
    try {
      const workOrder = await WorkOrders.findByPk(workOrderId);

      if (!workOrder) {
        return res.status(404).json({ error: 'workorder not found' });
      }
      await workOrder.destroy();
      res.json({ message: 'workorder deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});
  

module.exports = router;