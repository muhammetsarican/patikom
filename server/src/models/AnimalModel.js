const { default: mongoose } = require("mongoose");

const AnimalSchema = new mongoose.Schema({
    mother_id: {
        type: mongoose.Types.ObjectId,
        ref: "animal"
    },
    genre_id: {
        type: mongoose.Types.ObjectId,
        ref: "genre"
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