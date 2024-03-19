const Opportunities = require('../models/Opportunites');

const createOpportunities = async (req, res) => {
    
    try {
        const newOpportunity = await Opportunities.create(req.body);
        res.status(201).json(newOpportunity);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAll = async (req, res) => {
    try {
        const opportunity = await Opportunities.findAll();
        res.status(200).json(opportunity);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {createOpportunities,getAll};