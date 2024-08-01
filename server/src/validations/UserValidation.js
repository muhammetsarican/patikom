const yup = require("yup");

const createValidation = yup.object({
    fname: yup.string().min(3),
    lname: yup.string().min(3),
    mail: yup.string().email().required(),
    password: yup.string().min(8),
})

const updateValidation = yup.object({
    fname: yup.string().min(3),
    lname: yup.string().min(3),
    mail: yup.string().email().required(),
    password: yup.string().min(8),
})

const loginValidation = yup.object({
    mail: yup.string().email().required(),
    password: yup.string().min(8).required(),
})

const registerValidation = yup.object({
    fname: yup.string().min(3),
    lname: yup.string().min(3),
    mail: yup.string().email().required(),
    password: yup.string().min(8).required(),
})

const changeRoleValidation = yup.object({
    name: yup.string().required()
})

module.exports = {
    createValidation,
    updateValidation,
    loginValidation,
    registerValidation,
    changeRoleValidation
}