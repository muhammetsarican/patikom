const yup = require("yup");

const createValidation = yup.object({
    genre_id: yup.string().required(),
    name: yup.string().required(),
    country: yup.string()
})

const updateValidation = yup.object({
    genre_id: yup.string(),
    name: yup.string(),
    country: yup.string()
})

module.exports = {
    createValidation,
    updateValidation
}