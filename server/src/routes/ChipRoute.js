const BaseRoute = require("./BaseRoute");

const ChipController = require("../controllers/ChipController");

const schemas = require("../validations/ChipValidation");

class ChipRoute extends BaseRoute {
    constructor() {
        super(ChipController, schemas);
    }
}

module.exports = new ChipRoute();