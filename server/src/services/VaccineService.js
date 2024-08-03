const BaseService = require("./BaseService");
const VaccineModel = require("../models/VaccineModel");

class VaccineService extends BaseService {
    constructor() {
        super(VaccineModel);
    }
}

module.exports = new VaccineService();