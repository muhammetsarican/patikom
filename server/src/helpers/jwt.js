const jwt = require("jsonwebtoken");

const createAccessToken = (user) => {
    return jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET_KEY, { algorithm: 'HS512', expiresIn: "120m" });
}

const createRefreshToken = (user) => {
    return jwt.sign(user.toJSON(), process.env.REFRESH_TOKEN_SECRET_KEY, { algorithm: 'HS512', expiresIn: "120m" });
}

module.exports = {
    createAccessToken,
    createRefreshToken
}