import axios from "axios";
import { createContext, ReactNode, useContext } from "react";

type AxiosContextType = {
    client: any
    setHeader(token: string): void
}

const AxiosContext = createContext<AxiosContextType>({
    client: () => { },
    setHeader: () => { }
});

const AxiosProvider = ({ children }: { children: ReactNode }) => {
    const axiosConfig = {
        baseURL: `http://${import.meta.env.VITE_SERVER_HOST}:${import.meta.env.VITE_SERVER_PORT}`,
        withCredentials: true,
        headers: {
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type'
        },
        timeout: 1000,
    }
    const client = axios.create(axiosConfig);

    const setHeader = (token: string) => {
        client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    return <AxiosContext.Provider value={{ client, setHeader }}>
        {children}
    </AxiosContext.Provider>
}

const useAxios = () => useContext(AxiosContext);
export {
    AxiosProvider,
    useAxios
};