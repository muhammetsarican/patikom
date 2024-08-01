const BaseController = require("./BaseController");
const SuccessMessage = require("../handlers/SuccessMessage");

const TreatmentService = require("../services/TreatmentService");
const CategoryService = require("../services/CategoryService");
const MedicineService = require("../services/MedicineService");

class TreatmentController extends BaseController {
    constructor() {
        super(TreatmentService);
    }

    addCategory() {
        return (req, res, next) => {
            TreatmentService.read({ _id: req.params.id })
                .then(treatment => {
                    if (!treatment || !treatment.length) return next(ApiError.notFound());
                    if (!treatment.categories) treatment["categories"] = [];
                    CategoryService.read(req.body)
                        .then(category => {
                            if (!category || !category.length) return next(ApiError.notFound());
                            if (!category) {
                                CategoryService.create(req.body)
                                    .then(newCategory => {
                                        treatment.categories.push(newCategory);
                                    })
                            }
                            else {
                                treatment.categories.push(category);
                            }
                            treatment.save()
                                .then(response => {
                                    res.status(200).send(new SuccessMessage(response));
                                })
                        })
                })
        }
    }

    addMedicine() {
        return (req, res, next) => {
            TreatmentService.read({ _id: req.params.id })
                .then(treatment => {
                    if (!treatment || !treatment.length) return next(ApiError.notFound());
                    if (!treatment.medicines) treatment["medicines"] = [];
                    MedicineService.read(req.body)
                        .then(medicine => {
                            if (!medicine || !medicine.length) return next(ApiError.notFound());
                            if (!medicine) {
                                MedicineService.create(req.body)
                                    .then(newMedicine => {
                                        treatment.medicines.push(newMedicine);
                                    })
                            }
                            else {
                                treatment.medicines.push(medicine);
                            }
                            treatment.save()
                                .then(response => {
                                    res.status(200).send(new SuccessMessage(response));
                                })
                        })
                })
        }
    }
}

module.exports = new TreatmentController();