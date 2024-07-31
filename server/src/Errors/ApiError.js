const ErrorMessage = require("../handlers/ErrorMessage");

class ApiError extends Error {
    set(message, statusCode) {
        super.message = new ErrorMessage(message);
        this.status = statusCode;
    }
    badRequest() {
        super.message = new ErrorMessage("Bad request!");
        this.status = 400;
    }
    unauthorized() {
        super.message = new ErrorMessage("Not authorized!");
        this.status = 401;
    }
    forbidden() {
        super.message = new ErrorMessage("Forbidded!");
        this.status = 403;
    }
    notFound() {
        super.message = new ErrorMessage("No records found!");
        this.status = 404;
    }
}

module.exports = new ApiError();