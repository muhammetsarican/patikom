import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useAxios } from "./AxiosProvider";
import { useAuth } from "./AuthProvider";

type FolkDataContextType = {
    folkArray: Array<any> | null
}

const FolkDataContext = createContext<FolkDataContextType>({
    folkArray: []
})

const FolkDataProvider = ({ children }: { children: ReactNode }) => {
    const [folkArray, setFolkArray] = useState<Array<any> | null>(null);
    const { client } = useAxios();
    const { user } = useAuth();

    const getFolkData = () => {
        if (user) {
            client("/folk", {
                method: "get"
            })
                .then((response: any) => response.data)
                .then((data: any) => setFolkArray(data.message))
                .catch((err: any) => alert(err));
        }
    }

    useEffect(() => {
        getFolkData();
    }, [user])

    const values = {
        folkArray
    }
    return <FolkDataContext.Provider value={values}>
        {children}
    </FolkDataContext.Provider>
}

const useFolkData = () => useContext(FolkDataContext);

export {
    FolkDataProvider,
    useFolkData
}