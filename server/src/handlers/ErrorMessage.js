class ErrorMessage {
    constructor(message) {
        this.message = message;
        return {
            success: false,
            message: this.message
        };
    }
}

module.exports = ErrorMessage;