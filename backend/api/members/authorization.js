/* backend/.env 파일 만들어서 
SECRET_KEY=mySuperSecretKey  <-- 붙여넣기 */

const jwt = require('jsonwebtoken');
require("dotenv").config();
const YOUR_SECRET_KEY = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
    try {
        const clientToken = req.headers.authorization; //수정
        console.log( { "프론트에게 받은 토큰" : clientToken} ); //test
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
