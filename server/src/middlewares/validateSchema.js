const ApiError = require("../Errors/ApiError");

module.exports.validate = (schema) => (req, res, next) => {
    schema.validate(req.body)
        .then((response) => {
            console.log(response)
            next();
        })
        .catch(err => {
            console.log(err);
            next(ApiError.set(err, 400))
        });
}