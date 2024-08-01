const express = require("express");
const UserRoute = require("./UserRoute");
const ChipRoute = require("./ChipRoute");
const AnimalRoute = require("./AnimalRoute");
const FolkRoute = require("./FolkRoute");
const GenreRoute = require("./GenreRoute");
const PregnantLogRoute = require("./PregnantLogRoute");
const TreatmentRoute = require("./TreatmentRoute");
const CategoryRoute = require("./CategoryRoute");
const MedicineRoute = require("./MedicineRoute");
const VaccineRoute = require("./VaccineRoute");

const app = express();

app.get("/", (req, res, next) => {
    res.send({
        success: true,
        message: "Welcome to Base routes!"
    })
})

app.use("/user", UserRoute.indexRoutes());
app.use("/chip", ChipRoute.indexRoutes());
app.use("/animal", AnimalRoute.indexRoutes());
app.use("/folk", FolkRoute.indexRoutes());
app.use("/genre", GenreRoute.indexRoutes());
app.use("/pregnant-log", PregnantLogRoute.indexRoutes());
app.use("/treatment", TreatmentRoute.indexRoutes());
app.use("/category", CategoryRoute.indexRoutes());
app.use("/medicine", MedicineRoute.indexRoutes());
app.use("/vaccine", VaccineRoute.indexRoutes());
app.use("/user", UserRoute.indexRoutes());

module.exports.BaseRoutes = app