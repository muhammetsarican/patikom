const connectDb = require("./db")

module.exports.database = () => {
    connectDb();
}