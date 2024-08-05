const ApiError = require("../errors/ApiError");

const validate = (schema) => (req, res, next) => {
    schema.validate(req.body)
        .then(() => {
            next();
        })
        .catch(err => {
            next(ApiError.set(err.message, 400))
        });
}

module.exports = validate;
