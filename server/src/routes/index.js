const express = require("express");
const { UserRoute } = require("./UserRoute");

const app = express();

app.get("/", (req, res, next) => {
    res.send({
        success: true,
        message: "Welcome to Base routes!"
    })
})

app.use("/user", UserRoute.indexRoutes());

module.exports.BaseRoutes = app