const authenticate = require("../middlewares/authenticate");
const authorizationChecker = require("../middlewares/authorizationChecker");

const express = require("express");
const validate = require("../middlewares/validateSchema");
const idChecker = require("../middlewares/idChecker");

class BaseRoute {
    constructor(controller, schemas, router = express.Router()) {
        this.controller = controller;
        this.schemas = schemas;
        this.router = router;
    }

    newRecord(authorizatedRole = "admin") {
        this.router.route("/").post(authenticate, authorizationChecker(authorizatedRole), validate(this.schemas.createValidation), this.controller.newRecord())
    }

    listOne(authorizatedRole = "admin") {
        this.router.route("/:id").get(idChecker(), authenticate, authorizationChecker(authorizatedRole), this.controller.listOne());
    }

    listAll(authorizatedRole = "admin") {
        this.router.route("/").get(authenticate, authorizationChecker(authorizatedRole), this.controller.listAll());
    }

    updateOne(authorizatedRole = "admin") {
        this.router.route("/:id").patch(idChecker(), authenticate, authorizationChecker(authorizatedRole), validate(this.schemas.updateValidation), this.controller.updateOne());
    }

    deleteOne(authorizatedRole = "admin") {
        this.router.route("/:id").delete(idChecker(), authenticate, authorizationChecker(authorizatedRole), this.controller.deleteOne());
    }

    indexRoutes() {
        this.newRecord();
        this.listOne();
        this.listAll();
        this.updateOne();
        this.deleteOne();
        return this.router;
    }
}

module.exports = BaseRoute;