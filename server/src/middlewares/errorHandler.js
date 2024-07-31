const ApiError = require("../Errors/ApiError");
const ErrorMessage = require("../handlers/ErrorMessage");
const { clo } = require("../utils/CustomConsoleLog")

module.exports = (error, req, res, next) => {
    clo.g(error);
    res.status(error.status || 500).send(error.message || "Internal server error!");
}