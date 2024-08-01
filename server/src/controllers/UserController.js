const BaseController = require("./BaseController");
const UserService = require("../services/UserService");
const SuccessMessage = require("../handlers/SuccessMessage");
const HashPassword = require("../helpers/HashPassword");

class UserController extends BaseController {
    constructor() {
        super(UserService);
    }

    login() {
        return (req, res, next) => {
            req.body.password = HashPassword(req.body.password);
            UserService.read(req.body)
                .then(response => {
                    if (!response || !response.length) return next(ApiError.notFound());
                    req.user = response;
                    res.status(200).send(new SuccessMessage(response));
                })
        }
    }

    register() {
        return (req, res, next) => {
            req.body.password = HashPassword(req.body.password);
            UserService.create(req.body)
                .then(response => {
                    req.user = response;
                    res.status(201).send(new SuccessMessage(response));
                })
        }
    }

    changeRole() {
        return (req, res, next) => {
            UserService.update(req.params.user_id, req.body.role)
                .then(response => {
                    res.status(200).send(new SuccessMessage(response));
                })
        }
    }
}

module.exports = new UserController();