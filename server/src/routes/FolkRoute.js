const BaseRoute = require("./BaseRoute");

const FolkController = require("../controllers/FolkController");
const schemas = require("../validations/FolkValidation");

class FolkRoute extends BaseRoute {
    constructor() {
        super(FolkController, schemas);
    }
}

module.exports = new FolkRoute();