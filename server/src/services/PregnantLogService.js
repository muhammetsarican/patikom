const BaseService = require("./BaseService");
const PregnantLogModel = require("../models/PregnantLogModel");

class PregnantLogService extends BaseService {
    constructor() {
        super(PregnantLogModel);
    }

    read(where = {}) {
        return super.read(where).populate({
            path: "animal_id",
            select: "name born_date",
            match: {
                status: "true"
            }
        })
    }
}

module.exports = new PregnantLogService();