const BaseRoute = require("./BaseRoute");

const GenreController = require("../controllers/GenreController");
const schemas = require("../validations/GenreValidation");

class GenreRoute extends BaseRoute {
    constructor() {
        super(GenreController, schemas);
    }
}

module.exports = new GenreRoute();