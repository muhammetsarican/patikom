const BaseController = require("./BaseController");
const VaccineService = require("../services/VaccineService");

class VaccineController extends BaseController {
    constructor() {
        super(VaccineService);
    }
}

module.exports = new VaccineController();