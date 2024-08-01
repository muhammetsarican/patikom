const BaseRoute = require("./BaseRoute");

const CategoryController = require("../controllers/CategoryController");
const schemas = require("../validations/CategoryValidation");

class CategoryRoute extends BaseRoute {
    constructor() {
        super(CategoryController, schemas);
    }
}

module.exports = new CategoryRoute();