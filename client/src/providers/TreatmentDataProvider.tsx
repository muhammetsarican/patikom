import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import { useAxios } from "./AxiosProvider";

type TreatmentDataContextType = {
    getTreatmentArray(): void
    createSubmit(data: any): void
    editSubmit(data: any): void
    deleteTreatment(id: string): void
    currentTreatment: any
    setCurrentTreatment(data: any): void
    treatmentArray: any
};

const TreatmentDataContext = createContext<TreatmentDataContextType>({
    getTreatmentArray: () => { },
    createSubmit: () => { },
    editSubmit: () => { },
    deleteTreatment: () => { },
    currentTreatment: null,
    setCurrentTreatment: () => { },
    treatmentArray: null
});

const TreatmentDataProvider = ({ children }: { children: ReactNode }) => {
    const [currentTreatment, setCurrentTreatment] = useState<any>(null);
    const [treatmentArray, setTreatmentArray] = useState<any>(null);

    const { user } = useAuth();
    const { client } = useAxios();

    const getTreatmentArray = () => {
        if (user) {
            client("/treatment", {
                method: "get"
            })
                .then((response: any) => response.data)
                .then((data: any) => setTreatmentArray(data.message))
                .catch((err: any) => alert(err.response.data.message))
        }
    };

    const createSubmit = (data: any) => {
        client("/treatment", {
            method: "post",
            data
        })
            .then(() => getTreatmentArray())
            .catch((err: any) => alert(err.response.data.message))
    };

    const editSubmit = (data: any) => {
        client(`/treatment/${currentTreatment._id}`, {
            method: "patch",
            data
        })
            .then(() => getTreatmentArray())
            .catch((err: any) => alert(err.response.data.message))
    };

    const deleteTreatment = (id: string) => {
        client(`/treatment/${id}`, {
            method: "delete"
        })
            .then(() => getTreatmentArray())
            .catch((err: any) => alert(err.response.data.message))
    };

    useEffect(() => {
        getTreatmentArray();
    }, [user])

    const values = {
        getTreatmentArray,
        createSubmit,
        editSubmit,
        deleteTreatment,
        currentTreatment,
        setCurrentTreatment,
        treatmentArray
    };

    return <TreatmentDataContext.Provider value={values}>
        {children}
    </TreatmentDataContext.Provider>
}

const useTreatmentData = () => useContext(TreatmentDataContext);

export {
    useTreatmentData,
    TreatmentDataProvider
}