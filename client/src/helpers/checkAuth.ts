export const checkStorage = () => {
    return !!localStorage.getItem("access_token");
}