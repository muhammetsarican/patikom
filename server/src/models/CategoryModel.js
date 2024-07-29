const { default: mongoose } = require("mongoose");

const CategorySchema = new mongoose.Schema({
    title: {
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

module.exports = mongoose.model("category", CategorySchema);