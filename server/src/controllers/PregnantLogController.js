const BaseController = require("./BaseController");
const PregnantLogService = require("../services/PregnantLogService");

class PregnantLogController extends BaseController {
    constructor() {
        super(PregnantLogService);
    }
}

module.exports = new PregnantLogController();