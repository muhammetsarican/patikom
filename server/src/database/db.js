const { default: mongoose } = require("mongoose");
const { clo } = require("../utils/CustomConsoleLog");

const db = mongoose.connection;

db.once("open", () => {
    clo.g("DB connection is successful");
})

const connectDb = async () => {
    const dbUri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
    await mongoose.connect(dbUri);
}

module.exports = connectDb;