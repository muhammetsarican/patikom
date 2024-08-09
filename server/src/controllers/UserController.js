const BaseController = require("./BaseController");

const UserService = require("../services/UserService");

const HashPassword = require("../helpers/HashPassword");

const SuccessMessage = require("../handlers/SuccessMessage");
const ApiError = require("../errors/ApiError");
const { createAccessToken, createRefreshToken } = require("../helpers/jwt");

class UserController extends BaseController {
    constructor() {
        super(UserService);
    }

    newRecord() {
        return (req, res, next) => {
            if (req.body.password) req.body.password = HashPassword(req.body.password);
            req.body.role = "user";
            req.body.status = "true";
            UserService.create(req.body)
                .then(response => {
                    res.status(201).send(new SuccessMessage(response));
                })
        }
    }

    updateOne() {
        return (req, res, next) => {
            if (req.body.password) req.body.password = HashPassword(req.body.password);
            UserService.update(req.params.id, req.body)
                .then(response => {
                    if (!response) return next(ApiError.notFound());
                    res.status(200).send(new SuccessMessage(response));
                })
        }
    }

    login() {
        return (req, res, next) => {
            req.body.password = HashPassword(req.body.password);
            UserService.readOne(req.body)
                .then(user => {
                    if (!user) return next(ApiError.badInformations());
                    const tokens = {
                        access_token: createAccessToken(user.toJSON()),
                        refresh_token: createRefreshToken(user.toJSON())
                    }
                    const response = {
                        user,
                        tokens
                    }

                    res.status(200).send(new SuccessMessage(response));
                })
        }
    }

    register() {
        return (req, res, next) => {
            req.body.password = HashPassword(req.body.password);
            req.body.role = "user";
            req.body.status = "true";
            UserService.create(req.body)
                .then(user => {
                    const tokens = {
                        access_token: createAccessToken(user.toJSON()),
                        refresh_token: createRefreshToken(user.toJSON())
                    }
                    const response = {
                        user,
                        tokens
                    }

                    res.status(201).send(new SuccessMessage(response));
                })
        }
    }

    changeRole() {
        return (req, res, next) => {
            UserService.update(req.params.user_id, req.body)
                .then(response => {
                    if (!response) return next(ApiError.notFound())
                    res.status(200).send(new SuccessMessage(response));
                })
        }
    }
}

module.exports = new UserController();