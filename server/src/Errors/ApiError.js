const ErrorMessage = require("../handlers/ErrorMessage");

class ApiError extends Error {
    constructor(message, statusCode) {
        super(new ErrorMessage(message));
        this.status = statusCode;
    }
}

module.exports = ApiError;