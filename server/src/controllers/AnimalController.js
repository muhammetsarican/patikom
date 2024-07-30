const BaseController = require("./BaseController");
const AnimalService = require("../services/AnimalService");
const SuccessMessage = require("../handlers/SuccessMessage");

class AnimalController extends BaseController {
    constructor() {
        super(AnimalService);
    }

    addVaccine() {
        return (req, res, next) => {
            VaccineService.read(req.body)
                .then(vaccine => {
                    AnimalService.read({ _id: req.params.id })
                        .then(animal => {
                            if (!animal.vaccines) animal["vaccines"] = [];
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