const { clo } = require("../utils/CustomConsoleLog")

module.exports = (error, req, res, next) => {
    clo.g(error.message.message);
    res.status(error.status || 500).send(error.message || "Internal server error!");
}