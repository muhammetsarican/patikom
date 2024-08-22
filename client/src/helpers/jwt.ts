import { jwtDecode } from "jwt-decode";

export const decodeJwt = (token: string) => {
    const user = { ...jwtDecode(token) };

    delete user.password;
    delete user._id;
    delete user.createdAt;
    delete user.updatedAt;
    delete user.status;

    return user;
}