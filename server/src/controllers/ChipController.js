const BaseController = require("./BaseController");
const PlateService = require("../services/PlateService");

class PlateController extends BaseController {
    constructor() {
        super(PlateService);
    }
}

module.exports = new PlateController();