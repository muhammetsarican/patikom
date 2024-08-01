const BaseRoute = require("./BaseRoute");
const UserController = require("../controllers/UserController");
const schemas = require("../validations/UserValidation");
const validate = require("../middlewares/validateSchema");
const authenticate = require("../middlewares/authenticate");
const authorizationChecker = require("../middlewares/authorizationChecker");
const idChecker = require("../middlewares/idChecker");

class UserRoute extends BaseRoute {
    constructor() {
        super(UserController, schemas);
    }

    login(Router) {
        Router.route("/login").post(validate(schemas.loginValidation), UserController.login());
    }

    register(Router) {
        Router.route("/register").post(validate(schemas.registerValidation), UserController.register());
    }

    changeRole(Router) {
        Router.route("/:user-id/add-role/:role-id").post(idChecker("user-id"), idChecker("role-id"), authenticate, authorizationChecker(), UserController.changeRole());
    }

    indexRoutes() {
        this.router = super.indexRoutes();
        this.login(this.router);
        this.register(this.router);
        this.changeRole(this.router);

        return this.router;
    }
}

module.exports.UserRoute = new UserRoute();