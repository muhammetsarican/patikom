const BaseRoute = require("./BaseRoute");

const PregnantLogController = require("../controllers/PregnantLogController");
const schemas = require("../validations/PregnantLogValidation");

class PregnantLogRoute extends BaseRoute {
    constructor() {
        super(PregnantLogController, schemas);
    }
}

module.exports = new PregnantLogRoute();