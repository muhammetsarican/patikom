const { default: mongoose } = require("mongoose");

const ChipSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    animal_id: {
        type: mongoose.Types.ObjectId,
        ref: "animal"
    },
    code: {
        type: String,
        required: true
    },
    status: String
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model("chip", ChipSchema);