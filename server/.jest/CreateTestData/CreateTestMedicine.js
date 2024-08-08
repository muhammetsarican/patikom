const { default: mongoose } = require("mongoose");
const MedicineModel = require("../../src/models/MedicineModel");

class TestMedicine {
    constructor() {
        this._id = new mongoose.Types.ObjectId();
        this.name = "Wear earring";
        this.keyword = "Wear earring";
        this.description = "Wear earring";
        this.status = "true";
    }
}

class CreateTestMedicine {
    async init() {
        await MedicineModel.deleteMany();
    }

    async saveTestMedicine() {
        const medicineData = { ...new TestMedicine() };

        await MedicineModel(medicineData).save();

        return medicineData;
    }
}

const createTestMedicine = new CreateTestMedicine();

module.exports = createTestMedicine;