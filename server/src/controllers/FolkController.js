const BaseController = require("./BaseController");
const FolkService = require("../services/FolkService");

class FolkController extends BaseController {
    constructor() {
        super(FolkService);
    }
}

module.exports = new FolkController();