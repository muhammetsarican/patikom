const ApiError = require("../errors/ApiError");
const SuccessMessage = require("../handlers/SuccessMessage");

class BaseController {
    constructor(service) {
        this.service = service;
    }

    newRecord(status = "true") {
        return (req, res, next) => {
            req.body.status = status
            this.service.create(req.body)
                .then(response => {
                    res.status(201).send(new SuccessMessage(response));
                })
        }
    }

    listOne() {
        return (req, res, next) => {
            const { id } = req.params;
            this.service.readOne({ _id: id })
                .then(response => {
                    if (!response) return next(ApiError.notFound());
                    res.status(200).send(new SuccessMessage(response));
                })
        }
    }

    listAll() {
        return (req, res, next) => {
            this.service.read()
                .then(response => {
                    if (!response) return next(ApiError.notFound());
                    if (!response.length) return next(ApiError.listEmpty());
                    res.status(200).send(new SuccessMessage(response));
                })
        }
    }

    updateOne() {
        return (req, res, next) => {
            this.service.update(req.params.id, req.body)
                .then(response => {
                    res.status(200).send(new SuccessMessage(response));
                })
        }
    }

    deleteOne() {
        return (req, res, next) => {
            this.service.delete(req.params.id)
                .then(response => {
                    if (!response) return next(ApiError.notFound());
                    res.status(200).send(new SuccessMessage(response));
                })
        }
    }
}

module.exports = BaseController;