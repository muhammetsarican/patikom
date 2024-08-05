const jwt = require("jsonwebtoken");

const ApiError = require("../errors/ApiError");
const UserService = require("../services/UserService");

module.exports = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader?.split(" ")[1];

    if (!token) next(ApiError.notAuthenticated());

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, user) => {
        if (err) return next(ApiError.set(err, 403));

        UserService.readOne({ _id: user._id })
            .then(response => {
                if (!response) return next(ApiError.noMatchToken());
                req.user = response;
                next();
            })
    })
}