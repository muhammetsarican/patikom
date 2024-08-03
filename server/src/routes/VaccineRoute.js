const BaseRoute = require("./BaseRoute");

const VaccineController = require("../controllers/VaccineController");
const schemas = require("../validations/VaccineValidation");

class VaccineRoute extends BaseRoute {
    constructor() {
        super(VaccineController, schemas);
    }
}

module.exports = new VaccineRoute();