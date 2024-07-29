const { default: mongoose } = require("mongoose");

const FolkSchema = new mongoose.Schema({
    genre_id: {
        type: mongoose.Types.ObjectId,
        ref: "genre"
    },
    name: {
        type: String,
        required: true
    },
    country: String,
    status: String
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model("folk", FolkSchema);