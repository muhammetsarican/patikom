const { default: mongoose } = require("mongoose");
const TreatmentModel = require("../../src/models/TreatmentModel");

class TestTreatment {
    constructor() {
        this._id = new mongoose.Types.ObjectId();
        this.animal_id = new mongoose.Types.ObjectId();
        this.vet_id = new mongoose.Types.ObjectId();
        this.title = "Pregnant check";
        this.keyword = "Pregnant check";
        this.description = "Pregnant check";
        this.categories = [];
        this.medicines = [];
        this.status = "true";
    }
}

class CreateTestTreatment {
    async init() {
        await TreatmentModel.deleteMany();
    }

    async saveTestTreatment() {
        const treatmentData = { ...new TestTreatment() };

        await TreatmentModel(treatmentData).save();

        return treatmentData;
    }
}

const createTestTreatment = new CreateTestTreatment();

module.exports = createTestTreatment;