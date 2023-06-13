const jwt = require("jsonwebtoken");
const SECRET = process.env.FIRST_SECRET_KEY;

module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, SECRET, (err, payload) => {
        if (err) {
            res.status(400).json({ verified: false });
        } else {
            next();
        }
    })
}