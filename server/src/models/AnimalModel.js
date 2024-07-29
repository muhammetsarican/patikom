const { default: mongoose } = require("mongoose");

const AnimalSchema = new mongoose.Schema({
    mother_id: {
        type: mongoose.Types.ObjectId,
        ref: "animal"
    },
    folk_id: {
        type: mongoose.Types.ObjectId,
        ref: "folk"
    },
    chip_status: String,
    name: String,
    gender: String,
    born_date: Date,
    vaccines: [{
        type: mongoose.Types.ObjectId,
        ref: "vaccine"
    }],
    status: String
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model("animal", AnimalSchema);