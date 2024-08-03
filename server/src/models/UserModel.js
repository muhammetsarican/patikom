const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    mail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        select: false
    },
    role: String,
    status: String
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("user", UserSchema);