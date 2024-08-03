const BaseController = require("./BaseController");
const ChipService = require("../services/ChipService");

class ChipController extends BaseController {
    constructor() {
        super(ChipService);
    }
}

module.exports = new ChipController();