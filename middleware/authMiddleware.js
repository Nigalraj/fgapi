const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    const authorizationHeader = req.header('Authorization');

    if (!authorizationHeader) {
        return res.status(401).json({ error: 'Access denied. Token not provided.' });
    }

    const tokenParts = authorizationHeader.split(' ');

    if (tokenParts.length !== 2 || tokenParts[0].toLowerCase() !== 'bearer') {
        return res.status(401).json({ error: 'Invalid Authorization header format.' });
    }

    const token = tokenParts[1];

    jwt.verify(token, 'your-secret-key', (err, user) => {
        if (err) {
            console.log(err);
            return res.status(403).json({ error: 'Invalid token.' });
        }
        req.user = user;
        next();
    });
};

module.exports = authenticateJWT;
