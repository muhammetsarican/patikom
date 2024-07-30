const express = require("express");
const config = require("./config");

const { clo } = require("./utils/CustomConsoleLog");
const { database } = require("./database");

config();
database();

const app = express();

app.use(express.json());

const PORT = process.env.APP_PORT || "3000";

app.listen(PORT, () => {
    clo.g(`App running on ${PORT}`);
})