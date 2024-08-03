const BaseController = require("./BaseController");
const CategoryService = require("../services/CategoryService");

class CategoryController extends BaseController {
    constructor() {
        super(CategoryService);
    }
}

module.exports = new CategoryController();