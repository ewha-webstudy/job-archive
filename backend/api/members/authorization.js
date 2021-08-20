const jwt = require('jsonwebtoken');
require("dotenv").config();
const YOUR_SECRET_KEY = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
    try {
        const clientToken = req.cookies.user;
        const decoded = jwt.verify(clientToken, YOUR_SECRET_KEY);
    if (decoded) {
        res.locals.userid = decoded.userid;
        next();
    } else {
        res.status(401).json({ error: 'unauthorized' });
    }
    } catch (err) {
        res.status(401).json({ error: 'token expired' });
    }
};

exports.verifyToken = verifyToken;
