const BaseController = require("./BaseController");
const SuccessMessage = require("../handlers/SuccessMessage");

const TreatmentService = require("../services/TreatmentService");
const CategoryService = require("../services/CategoryService");
const MedicineService = require("../services/MedicineService");

const ApiError = require("../errors/ApiError");

class TreatmentController extends BaseController {
    constructor() {
        super(TreatmentService);
    }

    addCategory() {
        return (req, res, next) => {
            TreatmentService.readOne({ _id: req.params.id })
                .then(treatment => {
                    if (!treatment) return next(ApiError.listEmpty());
                    if (!treatment.categories) treatment["categories"] = [];
                    CategoryService.readOne({ _id: req.params.category_id })
                        .then(category => {
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
            TreatmentService.readOne({ _id: req.params.id })
                .then(treatment => {
                    if (!treatment) return next(ApiError.listEmpty());
                    if (!treatment.medicines) treatment["medicines"] = [];
                    MedicineService.readOne({ _id: req.params.medicine_id })
                        .then(medicine => {
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