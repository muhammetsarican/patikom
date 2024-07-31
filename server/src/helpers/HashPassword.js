const HmacSHA512 = require("crypto-js/hmac-sha512");

const HashPassword = (password) => {
    return HmacSHA512(password, process.env.PASSWORD_KEY).toString();
}

module.exports = HashPassword;