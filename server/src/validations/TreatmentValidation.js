const yup = require("yup");

const createValidation = yup.object({
    title: yup.string().required(),
    keyword: yup.string(),
    description: yup.string(),
    animal_id: yup.string().required(),
    categories: yup.array().default([]),
    medicines: yup.array().default([])
})

const updateValidation = yup.object({
    title: yup.string(),
    keyword: yup.string(),
    description: yup.string(),
    animal_id: yup.string(),
    categories: yup.array().default([]),
    medicines: yup.array().default([])
})

const addCategoryValidation = yup.object({
    title: yup.string().required(),
    keyword: yup.string(),
    description: yup.string()
})

const addMedicineValidation = yup.object({
    name: yup.string().required(),
    keyword: yup.string(),
    description: yup.string()
})

module.exports = {
    createValidation,
    updateValidation,
    addCategoryValidation,
    addMedicineValidation
}