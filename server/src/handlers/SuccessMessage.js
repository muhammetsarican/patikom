class SuccessMessage {
    constructor(message) {
        this.message = message;
        return {
            success: true,
            message: this.message
        };
    }
}

module.exports = SuccessMessage;