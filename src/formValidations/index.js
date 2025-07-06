import * as yup from "yup";

export const registerSchema = yup.object().shape({
    name: yup
        .string()
        .required("Name is required"),

    email: yup
        .string()
        .required("Email is required")
        .email("Invalid email"),

    password: yup
        .string()
        .required("Password is required"),

    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], "Password must match")
        .required("Confirm password is required")
})

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .required("Email is required")
        .email("Invalid email"),

    password: yup
        .string()
        .required("Password is required")
});