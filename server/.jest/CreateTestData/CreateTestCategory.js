const { default: mongoose } = require("mongoose");
const CategoryModel = require("../../src/models/CategoryModel");

class TestCategory {
    constructor() {
        this._id = new mongoose.Types.ObjectId();
        this.title = "Wear earring";
        this.keyword = "Wear earring";
        this.description = "Wear earring";
        this.status = "true";
    }
}

class CreateTestCategory {
    async init() {
        await CategoryModel.deleteMany();
    }

    async saveTestCategory() {
        const categoryData = { ...new TestCategory() };

        await CategoryModel(categoryData).save();

        return categoryData;
    }
}

const createTestCategory = new CreateTestCategory();

module.exports = createTestCategory;