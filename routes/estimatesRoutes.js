const express = require('express');
const router = express.Router();
const Estimates = require('../models/estimates');
const Leads = require('../models/leads');

router.post('/', async (req, res) => {
    try {
        const leadId = req.body.LeadsId;
        console.log(leadId,"fjhf");
        const Lead = await Leads.findOne({where:{LeadsId:leadId,IsOpportunity:true}});
        console.log(Lead,"ghhb");

        if(!Lead){
          return res.status(400).json({error:`LeadsId does not exist or is not an opportunity.`})
        }
        const newEstimate = await Estimates.create(req.body);
        if(req.body.status === 4)
        {
          await Estimates.update({ ReadyForWorker: true }, { where: { EstimateId: newEstimate.EstimateId } });
        }
        res.status(201).json(newEstimate);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
});

router.put('/locked/:estimateid', async (req, res) => {
  try {
      const estimateId = req.params.estimateid;

      const estimate = await Estimates.findByPk(estimateId);

      if (!estimate) {
          return res.status(404).json({ error: 'Estimate not found' });
      }

      await estimate.update({ Locked: true });

      res.status(200).json({ message: 'Estimate locked successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/:estimateid', async (req, res) => {
  try {
      const estimateId = req.params.estimateid;

      const estimate = await Estimates.findByPk(estimateId);

      if (!estimate) {
          return res.status(404).json({ error: 'Estimate not found' });
      }

      if (!estimate.Locked) {
          await estimate.update(req.body);
          res.status(200).json({ message: 'Estimate updated successfully' });
      } else {
          res.status(403).json({ error: 'Estimate is locked and cannot be edited' });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/changeorder', async (req, res) => {
  try {
      
      const defaultValues = {
          DefaultEstimate: false,
          Locked: false,
      };

      const estimateData = { ...defaultValues, ...req.body, ChangeOrder: true };

      const newEstimate = await Estimates.create(estimateData);

      res.status(201).json(newEstimate);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/defaultestimate/:estimateid', async (req, res) => 
  {
    try {
        const estimateId = req.params.estimateid;

        const estimate = await Estimates.findByPk(estimateId);
        if (!estimate) {
            return res.status(404).json({ error: 'Estimate not found' });
        }

        if (!estimate.Locked) {
            await estimate.update({ DefaultEstimate: true });
            res.status(200).json({ message: 'Estimate updated successfully' });
        } else {
            res.status(403).json({ error: 'Estimate is locked and cannot be edited' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
