const yup = require("yup");

const createValidation = yup.object({
    name: yup.string().required()
})

const updateValidation = yup.object({
    name: yup.string()
})

module.exports = {
    createValidation,
    updateValidation
}