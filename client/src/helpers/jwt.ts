import { jwtDecode } from "jwt-decode";

export const decodeJwt = (token: string) => {
    const user: any = { ...jwtDecode(token) };

    if (user.exp! < (new Date().getTime() + 1) / 1000) return false;

    delete user.password;
    delete user.createdAt;
    delete user.updatedAt;
    delete user.status;

    return user;
}