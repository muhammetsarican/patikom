const app = require("./app.js");
const { clo } = require("./utils/CustomConsoleLog.js");
const { database } = require("./database");

database();

const PORT = process.env.APP_PORT || "3000";

app.listen(PORT, () => {
    clo.g(`Server running on ${PORT}`);
})