const { default: mongoose } = require("mongoose");
const ChipModel = require("../../src/models/ChipModel");

class TestChip {
    constructor() {
        this._id = new mongoose.Types.ObjectId();
        this.code = "123123123";
        this.animal_id = new mongoose.Types.ObjectId();
        this.user_id = new mongoose.Types.ObjectId();
        this.status = "true";
    }
}

class CreateTestChip {
    async init() {
        await ChipModel.deleteMany();
    }

    async saveTestChip() {
        const chipData = { ...new TestChip() };

        await ChipModel(chipData).save();

        return chipData;
    }
}

const createTestChip = new CreateTestChip();

module.exports = createTestChip;