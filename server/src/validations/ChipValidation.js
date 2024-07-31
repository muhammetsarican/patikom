const yup = require("yup");

const createValidation = yup.object({
    user_id: yup.string().required(),
    animal_id: yup.string().required(),
    code: yup.string().required()
})

const updateValidation = yup.object({
    user_id: yup.string(),
    animal_id: yup.string(),
    code: yup.string()
})

module.exports = {
    createValidation,
    updateValidation
}