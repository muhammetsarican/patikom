const { default: mongoose } = require("mongoose");

const VaccineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    keyword: String,
    description: String,
    status: String
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model("vaccine", VaccineSchema);