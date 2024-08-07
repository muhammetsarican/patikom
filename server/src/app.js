// libs
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

const config = require("./config");
const { database } = require("./database");

const ApiError = require("./errors/ApiError");
const errorHandler = require("./middlewares/errorHandler");

const { BaseRoutes } = require("./routes");

// loaders
config();
database();

// app initial
const app = express();

// addictions
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/", BaseRoutes);

// Error handling
app.use((req, res, next) => {
    return next(ApiError.set("The page not found", 404));
})

app.use(errorHandler);

module.exports = app;