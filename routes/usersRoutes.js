// routes/usersRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const nodemailer = require('nodemailer');

const sendActivationEmail = async (user) => {
    try {
    
      const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'karianne18@ethereal.email',
            pass: '6j3cTBDQDWPeeJTYrh'
        }
    });
    
        const activationLink = `http://localhost:3000/api/users/${user.userid}`;
        const mailOptions = {
          from: 'raj@gmail.com',
          to: user.Email,
          subject: 'Activate Your Account',
          text: `Click on the following link to activate your account: ${activationLink}`,
        };
    
        await transporter.sendMail(mailOptions);
      } catch (error) {
        console.error('Error sending activation email:', error.message);
        throw error; 
      }
};

router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    await sendActivationEmail(user);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params; 
        const user = await User.findByPk(id);
        console.log(id);
        if (user) {
          user.isActive = true;
          await user.save();
          res.status(200).json({ message: 'Account activated successfully.' });
        } else {
          res.status(404).json({ error: 'Invalid user ID.' });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
});

module.exports = router;
