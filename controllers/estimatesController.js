const Estimates = require('../models/estimates');
const Leads = require('../models/leads');

const createEstimate = async (req, res) => {
    try {
        const leadId = req.body.LeadsId;
        const Lead = await Leads.findOne({ where: { LeadsId: leadId, IsOpportunity: true } });

        if (!Lead) {
            return res.status(400).json({ error: `LeadsId does not exist or is not an opportunity.` });
        }

        const newEstimate = await Estimates.create(req.body);

        if (req.body.status === 4) {
            await Estimates.update({ ReadyForWorker: true }, { where: { EstimateId: newEstimate.EstimateId } });
        }

        res.status(201).json(newEstimate);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const lockEstimate = async (req, res) => {
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
};

const updateEstimate = async (req, res) => {
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
};

const createChangeOrder = async (req, res) => {
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
};

const duplicateEstimate = async (req, res) => {
    const { estimateId } = req.params;

    try {
        const existingEstimate = await Estimates.findByPk(estimateId);

        if (!existingEstimate) {
            return res.status(404).json({ error: 'Estimate not found' });
        }

        const duplicatedData = { ...existingEstimate.toJSON() };

        const newEstimate = await Estimates.create(duplicatedData);

        res.status(201).json(newEstimate);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const setDefaultEstimate = async (req, res) => {
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
};

module.exports = {
    createEstimate,
    lockEstimate,
    updateEstimate,
    createChangeOrder,
    duplicateEstimate,
    setDefaultEstimate,
};
