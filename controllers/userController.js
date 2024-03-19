const User = require('../models/user');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const sendActivationEmail = async (user) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'nels.macejkovic@ethereal.email',
                pass: 'hahMgSU3T3zn6zDTE4'
            }
        });
        console.log(user.Email);
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

const createUser = async (req, res) => {
    console.log("test entry")
    try {
        console.log("Request Body:", req.body);
      
        const passwordToHash = req.body.Password;
        if (!passwordToHash) {
            console.error("Password is missing in the request body");
            return res.status(400).json({ error: 'Bad Request' });
        }

        const hashedPassword = await bcrypt.hash(passwordToHash, 10);
        const user = await User.create({
            ...req.body,
            Password: hashedPassword,
        });

        await sendActivationEmail(user);

        res.status(201).json(user);
    } catch (error) {
        console.error(error,"h");
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const activateUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByPk(id);

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
};

const loginUser = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        const user = await User.findOne({ where: { Email } });
        
        if (user) {
            const isPasswordValid = await bcrypt.compare(Password, user.Password);

            if (isPasswordValid) {
               
                const accessToken = jwt.sign({ userId: user.userid }, 'your-secret-key', { expiresIn: '6h' });

                const referenceToken = jwt.sign({ userId: user.userid }, 'your-secret-key', { expiresIn: '24h' });

                res.status(200).json({ accessToken, referenceToken });
            } else {
                res.status(401).json({ error: 'Invalid password' });
            }
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



module.exports = {
    createUser,
    activateUser,
    loginUser
};
