import crypto from "crypto-js";

export default (password: string) => {
    return crypto.HmacSHA256(password, crypto.HmacSHA1(password, import.meta.env.VITE_PASSWORD_SECRET_KEY).toString()).toString()
}