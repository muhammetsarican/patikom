const BaseService = require("./BaseService");
const CategoryModel = require("../models/CategoryModel");

class CategoryService extends BaseService {
    constructor() {
        super(CategoryModel);
    }
}

module.exports = new CategoryService();