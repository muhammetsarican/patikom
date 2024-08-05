const yup = require("yup");

const createValidation = yup.object({
    title: yup.string().required(),
    keyword: yup.string(),
    description: yup.string(),
})

const updateValidation = yup.object({
    title: yup.string(),
    keyword: yup.string(),
    description: yup.string(),
})

module.exports = {
    createValidation,
    updateValidation
}