const BaseService = require("./BaseService");
const TreatmentModel = require("../models/TreatmentModel");

class TreatmentService extends BaseService {
    constructor() {
        super(TreatmentModel);
    }

    read(where = {}) {
        return super.read(where).populate([
            {
                path: "animal_id",
                select: "name born_date",
                match: {
                    status: "true"
                }
            },
            {
                path: "vet_id",
                select: "fname lname role",
                match: {
                    status: "true"
                }
            },
            {
                path: "categories",
                select: "title",
                match: {
                    status: "true"
                }
            },
            {
                path: "medicines",
                select: "name",
                match: {
                    status: "true"
                }
            }
        ])
    }
}

module.exports = new TreatmentService();