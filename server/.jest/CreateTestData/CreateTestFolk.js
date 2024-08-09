const { default: mongoose } = require("mongoose");
const FolkModel = require("../../src/models/FolkModel");

class TestFolk {
    constructor() {
        this._id = new mongoose.Types.ObjectId();
        this.genre_id = new mongoose.Types.ObjectId();
        this.name = "golden";
        this.country = "england";
        this.status = "true";
    }
}

class CreateTestFolk {
    async init() {
        await FolkModel.deleteMany();
    }

    async saveTestFolk() {
        const folkData = { ...new TestFolk() };

        await FolkModel(folkData).save();

        return folkData;
    }
}

const createTestFolk = new CreateTestFolk();

module.exports = createTestFolk;