const ApiError = require("../Errors/ApiError");
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

    listOne(where) {
        return (req, res, next) => {
            where.status = "true";
            this.service.read(where)
                .then(response => {
                    if (!response || !response.length) return next(ApiError.notFound());
                })
        }
    }

    listAll(status = "true") {
        return (req, res, next) => {
            this.service.read({ status })
                .then(response => {
                    if (!response || !response.length) return next(ApiError.notFound());
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
                    res.status(200).send(new SuccessMessage(response));
                })
        }
    }
}

module.exports = BaseController;