const { default: mongoose } = require("mongoose");

const PregnantLogSchema = new mongoose.Schema({
    animal_id: {
        type: mongoose.Types.ObjectId,
        ref: "animal"
    },
    pregnant_date: Date,
    is_completed: Boolean,
    status: String
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model("pregnant_log", PregnantLogSchema);