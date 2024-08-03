const { default: mongoose } = require("mongoose");

const TreatmentSchema = new mongoose.Schema({
    animal_id: {
        type: mongoose.Types.ObjectId,
        ref: "animal"
    },
    vet_id: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    title: String,
    keyword: String,
    description: String,
    categories: [
        {
            type: mongoose.Types.ObjectId,
            ref: "category"
        }
    ],
    medicines: [
        {
            type: mongoose.Types.ObjectId,
            ref: "medicine"
        }
    ],
    status: String
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model("treatment", TreatmentSchema);