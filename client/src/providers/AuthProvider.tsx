import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useAxios } from "./AxiosProvider";
import hashPassword from "../helpers/hashPassword";
import { deleteTokenAtStorage, getTokenFromStorage, saveTokenToStorage } from "../helpers/checkAuth";
import { decodeJwt } from "../helpers/jwt";

type AuthContextType = {
    loginSubmit(data: any): void
    registerSubmit(data: any): void
    user: object | null
    logout(): void
}

const AuthContext = createContext<AuthContextType>({
    loginSubmit: () => { },
    registerSubmit: () => { },
    user: {},
    logout: () => { }
})

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const { client, setHeader } = useAxios();
    const [user, setUser] = useState<object | null>(null);

    const validateUser = () => {
        const token = getTokenFromStorage();

        if (token) setUser(decodeJwt(token));
    }

    const loginSubmit = (data: any) => {
        data.password = hashPassword(data.password);

        client("/user/login", {
            method: "post",
            data
        })
            .then((response: any) => response.data)
            .then((data: any) => {
                saveTokenToStorage(data.message.tokens.access_token);
                setUser(data.message.user);
                setHeader(data.message.tokens.access_token);
            })
            .catch((err: any) => alert(err.response.data.message))
    }

    const registerSubmit = (data: any) => {
        data.password = hashPassword(data.password);

        client("/user/register", {
            method: "post",
            data
        })
            .then((response: any) => response.data)
            .then((data: any) => {
                saveTokenToStorage(data.message.tokens.access_token);
                setUser(data.message.user);
                setHeader(data.message.tokens.access_token);
            })
            .catch((err: any) => alert(err.response.data.message))
    }

    const logout = () => {
        deleteTokenAtStorage();
        setUser(null);
        setHeader("");
    }

    useEffect(() => {
        validateUser();
    }, []);

    const values = { loginSubmit, registerSubmit, user, logout };

    return <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext);

export {
    useAuth,
    AuthProvider
}