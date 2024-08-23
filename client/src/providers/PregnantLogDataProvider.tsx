import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import { useAxios } from "./AxiosProvider";

type PregnantLogDataContextType = {
    getPregnantLogArray(): void
    createSubmit(data: any): void
    editSubmit(data: any): void
    deletePregnantLog(id: string): void
    currentPregnantLog: any
    setCurrentPregnantLog(data: any): void
    pregnantLogArray: any
}

const PregnantLogDataContext = createContext<PregnantLogDataContextType>({
    getPregnantLogArray: () => { },
    createSubmit: () => { },
    editSubmit: () => { },
    deletePregnantLog: () => { },
    currentPregnantLog: null,
    setCurrentPregnantLog: () => { },
    pregnantLogArray: null
})

const PregnantLogDataProvider = ({ children }: { children: ReactNode }) => {
    const [currentPregnantLog, setCurrentPregnantLog] = useState<any>(null);
    const [pregnantLogArray, setPregnantLogArray] = useState<any>(null);

    const { user } = useAuth();
    const { client } = useAxios();

    const getPregnantLogArray = () => {
        if (user) {
            client("/pregnant-log", {
                method: "get"
            })
                .then((response: any) => response.data)
                .then((data: any) => setPregnantLogArray(data.message))
                .catch((err: any) => alert(err.response.data.message))
        }
    }

    const createSubmit = (data: any) => {
        client("/pregnant-log", {
            method: "post",
            data
        })
            .then(() => getPregnantLogArray())
            .catch((err: any) => alert(err.response.data.message))
    }
    const editSubmit = (data: any) => {
        client(`/pregnant-log/${currentPregnantLog._id}`, {
            method: "patch",
            data
        })
            .then(() => getPregnantLogArray())
            .catch((err: any) => alert(err.response.data.message))
    }
    const deletePregnantLog = (id: string) => {
        client(`/pregnant-log/${id}`, {
            method: "delete"
        })
            .then(() => getPregnantLogArray())
            .catch((err: any) => alert(err.response.data.message))
    }

    useEffect(() => {
        getPregnantLogArray();
    }, [user]);

    const values = {
        getPregnantLogArray,
        createSubmit,
        editSubmit,
        deletePregnantLog,
        currentPregnantLog,
        setCurrentPregnantLog,
        pregnantLogArray
    }

    return <PregnantLogDataContext.Provider value={values}>
        {children}
    </PregnantLogDataContext.Provider>
}

const usePregnantLogData = () => useContext(PregnantLogDataContext);

export {
    usePregnantLogData,
    PregnantLogDataProvider
}