const { default: mongoose } = require("mongoose");
const GenreModel = require("../../src/models/GenreModel");

class TestGenre {
    constructor() {
        this._id = new mongoose.Types.ObjectId();
        this.name = "dog";
        this.status = "true";
    }
}

class CreateTestGenre {
    async init() {
        await GenreModel.deleteMany();
    }

    async saveTestGenre() {
        const genreData = { ...new TestGenre() };

        await GenreModel(genreData).save();

        return genreData;
    }
}

const createTestGenre = new CreateTestGenre();

module.exports = createTestGenre;