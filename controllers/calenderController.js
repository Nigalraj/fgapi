const Calender = require('../models/calendar');

const createCalender = async (req, res) => {
    
    try {
        const newLead = await Calender.create(req.body);
        res.status(201).json(newLead);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAll = async (req, res) => {
    try {
        const leads = await Calender.findAll();
        res.status(200).json(leads);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {createCalender,getAll};