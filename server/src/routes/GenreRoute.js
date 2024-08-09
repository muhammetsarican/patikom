const BaseRoute = require("./BaseRoute");

const GenreController = require("../controllers/GenreController");
const schemas = require("../validations/GenreValidation");

class GenreRoute extends BaseRoute {
    constructor() {
        super(GenreController, schemas);
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

module.exports = new GenreRoute();