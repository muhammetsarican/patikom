const express = require("express");
const config = require("./config");

const { clo } = require("./utils/CustomConsoleLog");

config();

const app = express();

const PORT = process.env.APP_PORT || "3000";

app.listen(PORT, () => {
    clo.g(`App running on ${PORT}`);
})