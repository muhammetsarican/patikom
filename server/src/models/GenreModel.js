const { default: mongoose } = require("mongoose");

const GenreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model("genre", GenreSchema);