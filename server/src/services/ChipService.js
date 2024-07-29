const BaseService = require("./BaseService");
const ChipModel = require("../models/ChipModel");

class ChipService extends BaseService {
    constructor() {
        super(ChipModel);
    }

    read(where = {}) {
        return super.read(where).populate([
            {
                path: "user_id",
                select: "fname lname role",
                match: {
                    status: "true"
                }
            },
            {
                path: "animal_id",
                select: "name gender folk_id",
                match: {
                    status: "true"
                },
                populate: {
                    path: "folk_id",
                    select: "name genre_id",
                    match: {
                        status: "true"
                    },
                    populate: {
                        path: "genre_id",
                        select: "name",
                        match: {
                            status: "true"
                        },
                    }
                }
            }
        ])
    }
}

module.exports = new ChipService();