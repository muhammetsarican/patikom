export const checkStorage = () => {
    return !!localStorage.getItem("access_token");
}

export const saveTokenToStorage = (token: string) => {
    localStorage.setItem("access_token", token);
}

export const getTokenFromStorage = () => {
    return localStorage.getItem("access_token");
}

export const deleteTokenAtStorage = () => {
    return localStorage.removeItem("access_token");
}