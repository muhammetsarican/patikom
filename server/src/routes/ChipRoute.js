const BaseRoute = require("./BaseRoute");

const ChipController = require("../controllers/ChipController");

const schemas = require("../validations/ChipValidation");

class ChipRoute extends BaseRoute {
    constructor() {
        super(ChipController, schemas);
    }
    indexRoutes() {
        super.listAll("vet");
        return super.indexRoutes();
    }
}

module.exports = new ChipRoute();