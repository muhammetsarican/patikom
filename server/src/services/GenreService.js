const BaseService = require("./BaseService");
const GenreModel = require("../models/GenreModel");

class GenreService extends BaseService {
    constructor() {
        super(GenreModel);
    }
}

module.exports = new GenreService();