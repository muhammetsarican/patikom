const BaseRoute = require("./BaseRoute");

const TreatmentController = require("../controllers/TreatmentController");
const schemas = require("../validations/TreatmentValidation");
const idChecker = require("../middlewares/idChecker");
const authenticate = require("../middlewares/authenticate");
const authorizationChecker = require("../middlewares/authorizationChecker");

class TreatmentRoute extends BaseRoute {
    constructor() {
        super(TreatmentController, schemas);
    }

    addCategory(Router, authorizedRole) {
        Router.route("/:id/add-category/:category_id").patch(idChecker(), idChecker("category_id"), authenticate, authorizationChecker(authorizedRole), TreatmentController.addCategory());
    }

    addMedicine(Router, authorizedRole) {
        Router.route("/:id/add-medicine/:medicine_id").patch(idChecker(), idChecker("medicine_id"), authenticate, authorizationChecker(authorizedRole), TreatmentController.addMedicine());
    }

    indexRoutes() {
        this.router = super.indexRoutes();
        this.addCategory(this.router, "vet");
        this.addMedicine(this.router, "vet");
        return this.router;
    }
}

module.exports = new TreatmentRoute();