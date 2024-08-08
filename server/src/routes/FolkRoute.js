const BaseRoute = require("./BaseRoute");

const FolkController = require("../controllers/FolkController");
const schemas = require("../validations/FolkValidation");

class FolkRoute extends BaseRoute {
    constructor() {
        super(FolkController, schemas);
    }

    indexRoutes() {
        super.listOne("vet");
        super.listAll("vet");
        super.newRecord("vet");
        super.updateOne("vet")
        super.deleteOne("vet")
        return super.indexRoutes();
    }
}

module.exports = new FolkRoute();