const BaseController = require("./BaseController");
const GenreService = require("../services/GenreService");

class GenreController extends BaseController {
    constructor() {
        super(GenreService);
    }
}

module.exports = new GenreController();