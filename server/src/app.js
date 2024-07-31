const express = require("express");
const config = require("./config");

const { clo } = require("./utils/CustomConsoleLog");
const { database } = require("./database");

const ApiError = require("./Errors/ApiError");
const errorHandler = require("./middlewares/errorHandler");
const { BaseRoutes } = require("./routes");

config();
database();

const app = express();

app.use(express.json());

const PORT = process.env.APP_PORT || "3000";

app.listen(PORT, () => {
    clo.g(`App running on ${PORT}`);

    app.use("/", BaseRoutes);

    app.use((req, res, next) => {
        next(ApiError.set("The page not found", 404));
    })

    app.use(errorHandler);
})