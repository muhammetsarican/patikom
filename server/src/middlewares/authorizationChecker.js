const ApiError = require("../errors/ApiError");

const AuthorizationRoleMatcher = (authorizatedRole, userRole) => {
    if (userRole === "admin") return true;
    if (userRole === "vet" && authorizatedRole === "vet" || authorizatedRole === "user") return true;
    if (userRole === "user" && authorizatedRole === "user") return true;

    return false;
}

module.exports = (authorizatedRole = "admin") => (req, res, next) => {
    const isAuthorized = AuthorizationRoleMatcher(authorizatedRole, req.user?.role);
    if (!isAuthorized) return next(ApiError.unauthorized());
    next();
}
