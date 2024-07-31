const yup = require("yup");

const createValidation = yup.object({
    mother_id: yup.string(),
    folk_id: yup.string().required(),
    chip_status: yup.string().default("both_exist"),
    name: yup.string().min(3),
    gender: yup.string(),
    born_date: yup.date(),
    vaccines: yup.array()
})

const updateValidation = yup.object({
    mother_id: yup.string(),
    folk_id: yup.string(),
    chip_status: yup.string(),
    name: yup.string().min(3),
    gender: yup.string(),
    born_date: yup.date(),
    vaccines: yup.array()
})

const addVaccineValidation = yup.object({
    name: yup.string().required(),
    keyword: yup.string().min(3),
    description: yup.string().min(8)
})

module.exports = {
    createValidation,
    updateValidation,
    addVaccineValidation
}