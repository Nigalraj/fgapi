const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config'); // Add your secret key here

const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized - Missing token' });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden - Invalid token' });
        }

        req.user = user;
        next();
    });
};

module.exports = authenticateJWT;
