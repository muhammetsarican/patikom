const { default: mongoose } = require("mongoose");
const AnimalModel = require("../../src/models/AnimalModel");

class TestAnimal {
    constructor() {
        this._id = new mongoose.Types.ObjectId();
        this.mother_id = new mongoose.Types.ObjectId();
        this.folk_id = new mongoose.Types.ObjectId();
        this.chip_status = "exist";
        this.name = "Müge";
        this.gender = "male";
        this.born_data = new Date();
        this.vaccines = [];
        this.status = "true";
    }
}

class CreateTestAnimal {
    async init() {
        await AnimalModel.deleteMany();
    }

    async saveTestAnimal() {
        const animalData = { ...new TestAnimal() };

        await AnimalModel(animalData).save();

        return animalData;
    }
}

const createTestAnimal = new CreateTestAnimal();

module.exports = createTestAnimal;