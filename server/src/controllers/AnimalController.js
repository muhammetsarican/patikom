const BaseController = require("./BaseController");
const SuccessMessage = require("../handlers/SuccessMessage");

const AnimalService = require("../services/AnimalService");
const VaccineService = require("../services/VaccineService");

class AnimalController extends BaseController {
    constructor() {
        super(AnimalService);
    }

    addVaccine() {
        return (req, res, next) => {
            AnimalService.read({ _id: req.params.id })
                .then(animal => {
                    if (!animal || !animal.length) return next(ApiError.notFound());
                    if (!animal.vaccines) animal["vaccines"] = [];
                    VaccineService.read({ _id: req.params.vaccine_id })
                        .then(vaccine => {
                            if (!vaccine || !vaccine.length) return next(ApiError.notFound());
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