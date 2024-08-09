const yup = require("yup");

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const createValidation = yup.object({
    fname: yup.string().min(3),
    lname: yup.string().min(3),
    mail: yup.string().email().matches(emailRegex).required(),
    password: yup.string().min(8),
})

const updateValidation = yup.object({
    fname: yup.string().min(3),
    lname: yup.string().min(3),
    mail: yup.string().email().matches(emailRegex),
    password: yup.string().min(8),
})

const loginValidation = yup.object({
    mail: yup.string().email().matches(emailRegex).required(),
    password: yup.string().min(8).required(),
})

const registerValidation = yup.object({
    fname: yup.string().min(3),
    lname: yup.string().min(3),
    mail: yup.string().email().matches(emailRegex).required(),
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