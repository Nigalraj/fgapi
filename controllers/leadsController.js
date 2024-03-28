const Leads = require('../models/leads');
const User = require('../models/user');

const getActiveOpportunities = async (req, res) => {
    try {
        const leads = await Leads.findAll({
            where: {
                IsOpportunity: true,
            },
        });
        res.status(200).json(leads);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getInactiveOpportunities = async (req, res) => {
    try {
        const leads = await Leads.findAll({
            where: {
                IsOpportunity: false,
            },
        });
        res.status(200).json(leads);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateOpportunityStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const lead = await Leads.findByPk(id);
        if (!lead) {
            return res.status(404).json({ error: 'Lead not found.' });
        }

        if (!lead.IsOpportunity) {
            lead.IsOpportunity = true;
            await lead.save();
            return res.status(200).json({ message: 'IsOpportunity set to true.' });
        } else {
            return res.status(400).json({ error: 'IsOpportunity is already set to true.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const createLead = async (req, res) => {
    try {
        const newLead = await Leads.create(req.body);
        res.status(201).json(newLead);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const createLeadWithUser = async (req, res) => {
    try {
        const { Users, Leads: leadsData } = req.body;
        if (leadsData.UserId) {
            const existingUser = await User.findByPk(leadsData.UserId);
            if (!existingUser) {
                return res.status(404).json({ error: 'User not found with the provided UserId' });
            }
        } else {
            const newUser = await User.create(Users);
            leadsData.UserId = newUser.userid;
        }
        const newLead = await Leads.create(leadsData);

        res.status(201).json(newLead);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getActiveOpportunities,
    getInactiveOpportunities,
    updateOpportunityStatus,
    createLead,
    createLeadWithUser,
};
