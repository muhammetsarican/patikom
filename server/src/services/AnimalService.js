const BaseService = require("./BaseService");
const AnimalModel = require("../models/AnimalModel");

class AnimalService extends BaseService {
    constructor() {
        super(AnimalModel);
    }

    read(where = {}) {
        return super.read(where).populate([
            {
                path: "mother_id",
                select: "name born_date",
                match: {
                    status: "true"
                }
            },
            {
                path: "folk_id",
                select: "name country"
            },
            {
                path: "vaccines",
                select: "name"
            }
        ])
    }
}

module.exports = new AnimalService();