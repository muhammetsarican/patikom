const ErrorMessage = require("../handlers/ErrorMessage");

class ApiError extends Error {
    constructor() {
        super();
    }
    set(message, statusCode) {
        super.message = new ErrorMessage(message);
        this.status = statusCode;
        return this;
    }
    badRequest() {
        super.message = new ErrorMessage("Bad request!");
        this.status = 400;
        return this;
    }
    unauthorized() {
        super.message = new ErrorMessage("Not authorized!");
        this.status = 401;
        return this;
    }
    forbidden() {
        super.message = new ErrorMessage("Forbidded!");
        this.status = 403;
        return this;
    }
    notFound() {
        super.message = new ErrorMessage("No records found!");
        this.status = 404;
        return this;
    }

    // customized errors
    notAuthenticated() {
        super.message = new ErrorMessage("You have to login first!");
        this.status = 403;
        return this;
    }

    unvalidId() {
        super.message = new ErrorMessage("Please provide a valid Id!");
        this.status = 400;
        return this;
    }

    listEmpty() {
        super.message = new ErrorMessage("List is empty!");
        this.status = 404;
        return this;
    }

    noMatchToken() {
        super.message = new ErrorMessage("No user matched this token!");
        this.status = 404;
        return this;
    }

    badInformations() {
        super.message = new ErrorMessage("Mail or password is wrong!");
        this.status = 400;
        return this;
    }
}

module.exports = new ApiError();