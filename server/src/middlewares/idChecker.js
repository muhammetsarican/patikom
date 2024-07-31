const ApiError = require("../Errors/ApiError");

module.exports = (field) = (req, res, next) => {
    if (!req?.params[field || "id"]?.match(/^[0-9a-fA-F]{24}$/)) return next(ApiError.unvalidId());
    next();
}