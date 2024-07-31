const yup = require("yup");

const createValidation = yup.object({
    animal_id: yup.string().required(),
    pregnant_date: yup.date().default(() => new Date()),
    is_completed: yup.boolean().default(false)
})

const updateValidation = yup.object({
    animal_id: yup.string().required(),
    pregnant_date: yup.date(),
    is_completed: yup.boolean()
})

module.exports.schemas = {
    createValidation,
    updateValidation
}