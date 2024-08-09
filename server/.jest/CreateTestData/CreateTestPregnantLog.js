const { default: mongoose } = require("mongoose");
const PregnantLogModel = require("../../src/models/PregnantLogModel");

class TestPregnantLog {
    constructor() {
        this._id = new mongoose.Types.ObjectId();
        this.animal_id = new mongoose.Types.ObjectId();
        this.pregnant_date = new Date();
        this.is_completed = false;
        this.status = "true";
    }
}

class CreateTestPregnantLog {
    async init() {
        await PregnantLogModel.deleteMany();
    }

    async saveTestPregnantLog() {
        const pregnantLogData = { ...new TestPregnantLog() };

        await PregnantLogModel(pregnantLogData).save();

        return pregnantLogData;
    }
}

const createTestPregnantLog = new CreateTestPregnantLog();

module.exports = createTestPregnantLog;