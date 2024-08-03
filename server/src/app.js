const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const config = require("./config");
const { database } = require("./database");

const { clo } = require("./utils/CustomConsoleLog");

const ApiError = require("./errors/ApiError");
const errorHandler = require("./middlewares/errorHandler");
const { BaseRoutes } = require("./routes");

config();
database();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

const PORT = process.env.APP_PORT || "3000";

app.listen(PORT, () => {
    clo.g(`App running on ${PORT}`);

    app.use("/", BaseRoutes);

    app.use((req, res, next) => {
        return next(ApiError.set("The page not found", 404));
    })

    app.use(errorHandler);
})