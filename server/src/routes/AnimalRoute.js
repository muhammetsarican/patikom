const BaseRoute = require("./BaseRoute");

const AnimalController = require("../controllers/AnimalController");
const schemas = require("../validations/AnimalValidation");

const idChecker = require("../middlewares/idChecker");
const authenticate = require("../middlewares/authenticate");
const authorizationChecker = require("../middlewares/authorizationChecker");

class AnimalRoute extends BaseRoute {
    constructor() {
        super(AnimalController, schemas)
    }

    addVaccine(Router) {
        Router.route("/:id/add-vaccine/:vaccine_id").patch(idChecker(), idChecker("vaccine_id"), authenticate, authorizationChecker(), AnimalController.addVaccine());
    }

    indexRoutes() {
        this.router = super.indexRoutes();
        this.addVaccine(this.router);
        return this.router;
    }
}

module.exports = new AnimalRoute();