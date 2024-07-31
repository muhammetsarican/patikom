const yup = require("yup");

const createValidation = yup.object({
    name: yup.string().required(),
    keyword: yup.string(),
    description: yup.string(),
})

const updateValidation = yup.object({
    name: yup.string(),
    keyword: yup.string(),
    description: yup.string(),
})

module.exports.schemas = {
    createValidation,
    updateValidation
}