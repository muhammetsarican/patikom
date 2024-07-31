const ApiError = require("../Errors/ApiError");

module.exports.validate = (schema) => (req, res, next) => {
    schema.validate(req.body)
        .then((response) => {
            next();
        })
        .catch(err => {
            next(ApiError.set(err, 400))
        });
}