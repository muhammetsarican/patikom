const BaseService = require("./BaseService");
const MedicineModel = require("../models/MedicineModel");

class MedicineService extends BaseService {
    constructor() {
        super(MedicineModel);
    }
}

module.exports = new MedicineService();