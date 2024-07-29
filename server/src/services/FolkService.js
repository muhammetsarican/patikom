const BaseService = require("./BaseService");
const FolkModel = require("../models/FolkModel");

class FolkService extends BaseService {
    constructor() {
        super(FolkModel);
    }

    read(where = {}) {
        return super.read(where).populate({
            path: "genre_id",
            select: "name",
            match: {
                status: "true"
            }
        })
    }
}

module.exports = new FolkService();