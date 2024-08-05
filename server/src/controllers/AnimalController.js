const BaseController = require("./BaseController");
const SuccessMessage = require("../handlers/SuccessMessage");

const AnimalService = require("../services/AnimalService");
const VaccineService = require("../services/VaccineService");

const ApiError = require("../errors/ApiError");

class AnimalController extends BaseController {
    constructor() {
        super(AnimalService);
    }

    addVaccine() {
        return (req, res, next) => {
            AnimalService.readOne({ _id: req.params.id })
                .then(animal => {
                    if (!animal) return next(ApiError.listEmpty());
                    if (!animal.vaccines) animal["vaccines"] = [];
                    VaccineService.readOne({ _id: req.params.vaccine_id })
                        .then(vaccine => {
                            if (!vaccine) {
                                VaccineService.create(req.body)
                                    .then(newVaccine => {
                                        animal.vaccines.push(newVaccine);
                                    })
                            }
                            else {
                                animal.vaccines.push(vaccine);
                            }
                            animal.save()
                                .then(response => {
                                    res.status(200).send(new SuccessMessage(response));
                                })
                        })
                })
        }
    }
}

module.exports = new AnimalController();