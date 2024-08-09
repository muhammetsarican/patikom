const { default: mongoose } = require("mongoose");

class DbConnect {
    dbUri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

    async connect() {
        await mongoose.connect(this.dbUri);
    }

    close() {
        mongoose.connection.close();
    }
}

module.exports = DbConnect;