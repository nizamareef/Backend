
var jwt = require('jsonwebtoken');
const jwt_secret = 'Nizamisagoodboy';

const fetchdata = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send("Access Denied")
    }
    const data = jwt.verify(token, jwt_secret)
    // console.log(data)
    req.userid = data.userId
    // console.log(req.userid)
    next()
}

module.exports = fetchdata