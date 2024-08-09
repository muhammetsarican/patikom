const { default: mongoose } = require("mongoose");
const VaccineModel = require("../../src/models/VaccineModel");

class TestVaccine {
    constructor() {
        this._id = new mongoose.Types.ObjectId();
        this.name = "Wear earring";
        this.keyword = "Wear earring";
        this.description = "Wear earring";
        this.status = "true";
    }
}

class CreateTestVaccine {
    async init() {
        await VaccineModel.deleteMany();
    }

    async saveTestVaccine() {
        const vaccineData = { ...new TestVaccine() };

        await VaccineModel(vaccineData).save();

        return vaccineData;
    }
}

const createTestVaccine = new CreateTestVaccine();

module.exports = createTestVaccine;