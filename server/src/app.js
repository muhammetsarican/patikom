// libs
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

const config = require("./config");

const ApiError = require("./errors/ApiError");
const errorHandler = require("./middlewares/errorHandler");

const { BaseRoutes } = require("./routes");

// loaders
config();

// app initial
const app = express();

// addictions
app.use(express.json());
app.use(helmet());
app.use(bodyParser.json());

const corsOptions = {
    origin: [`http://${process.env.CLIENT_HOST}:${process.env.CLIENT_PORT}`],
    credentials: true
}
app.use(cors(corsOptions));

// Routes
app.use("/", BaseRoutes);

// Error handling
app.use((req, res, next) => {
    return next(ApiError.set("The page not found", 404));
})

app.use(errorHandler);

module.exports = app;