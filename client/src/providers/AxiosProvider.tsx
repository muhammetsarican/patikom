import axios from "axios";
import { createContext, ReactNode, useContext } from "react";

type AxiosContextType = {
    client: any
}

const AxiosContext = createContext<AxiosContextType>({
    client: () => { }
});

const AxiosProvider = ({ children }: { children: ReactNode }) => {
    const axiosConfig = {
        baseURL: "",
        timeout: 1000,
        headers: { 'authorization': 'Bearer ' }
    }
    const client = axios.create(axiosConfig);

    return <AxiosContext.Provider value={{ client }}>
        {children}
    </AxiosContext.Provider>
}

const useAxios = () => useContext(AxiosContext);
export {
    AxiosProvider,
    useAxios
}