const BaseRoute = require("./BaseRoute");

const MedicineController = require("../controllers/MedicineController");
const schemas = require("../validations/MedicineValidation");

class MedicineRoute extends BaseRoute {
    constructor() {
        super(MedicineController, schemas);
    }
}

module.exports = new MedicineRoute();