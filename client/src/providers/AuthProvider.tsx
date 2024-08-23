import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useAxios } from "./AxiosProvider";
import hashPassword from "../helpers/hashPassword";
import { deleteTokenAtStorage, getTokenFromStorage, saveTokenToStorage } from "../helpers/checkAuth";
import { decodeJwt } from "../helpers/jwt";

type AuthContextType = {
    loginSubmit(data: any): void
    registerSubmit(data: any): void
    user: any
    logout(): void
    vetArray: any
}

const AuthContext = createContext<AuthContextType>({
    loginSubmit: () => { },
    registerSubmit: () => { },
    user: {},
    logout: () => { },
    vetArray: null
})

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const { client, setHeader } = useAxios();

    const [user, setUser] = useState<any>(null);
    const [vetArray, setVetArray] = useState<any>(null);

    const validateUser = () => {
        const token = getTokenFromStorage();

        if (token) {
            const tokenUser = decodeJwt(token);
            if (tokenUser) {
                setHeader(token);
                setUser(tokenUser);
            }
            else {
                setHeader("");
                deleteTokenAtStorage();
                setUser(null);
            }
        };
    }

    const getVetArray = () => {
        if (user) {
            client("/user", {
                method: "get"
            })
                .then((response: any) => response.data)
                .then((data: any) => setVetArray(data.message.filter((vet: any) => vet.role === "vet")))
                .catch((err: any) => alert(err.response.data.message))
        }
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

    useEffect(() => {
        getVetArray();
    }, [user]);

    const values = { loginSubmit, registerSubmit, user, logout, vetArray };

    return <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext);

export {
    useAuth,
    AuthProvider
}