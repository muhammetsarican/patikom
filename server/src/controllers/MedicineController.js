const BaseController = require("./BaseController");
const MedicineService = require("../services/MedicineService");

class MedicineController extends BaseController {
    constructor() {
        super(MedicineService);
    }
}

module.exports = new MedicineController();