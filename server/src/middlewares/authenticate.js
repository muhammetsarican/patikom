const ApiError = require("../errors/ApiError")

module.exports = (req, res, next) => {
    if (!req.user) return next(ApiError.notAuthenticated());

    UserService.read(req.user)
        .then(() => {
            next();
        })
        .catch(err => {
            req.user = null;
            next(ApiError.notAuthenticated());
        })
}