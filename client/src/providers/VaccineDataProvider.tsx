import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useAxios } from "./AxiosProvider";
import { useAuth } from "./AuthProvider";

type VaccineDataContextType = {
    vaccineArray: any
    createSubmit(data: any): void
    editSubmit(data: any): void
    deleteVaccine(id: string): void
    currentVaccine: any
    setCurrentVaccine(data: any): void
}

const VaccineDataContext = createContext<VaccineDataContextType>({
    vaccineArray: null,
    createSubmit: () => { },
    editSubmit: () => { },
    deleteVaccine: () => { },
    currentVaccine: null,
    setCurrentVaccine: () => { }
})

const VaccineDataProvider = ({ children }: { children: ReactNode }) => {
    const [currentVaccine, setCurrentVaccine] = useState<any>(null);
    const [vaccineArray, setVaccineArray] = useState<any>(null);
    const { client } = useAxios();
    const { user } = useAuth();

    const getVaccineArray = () => {
        if (user) {
            client("/vaccine", {
                method: "get"
            })
                .then((response: any) => response.data)
                .then((data: any) => setVaccineArray(data.message))
                .catch((err: any) => alert(err.response.data.message))
        }
    }

    const createSubmit = (data: any) => {
        client("/vaccine", {
            method: "post",
            data
        })
            .then(() => getVaccineArray())
            .catch((err: any) => alert(err.response.data.message))
    }

    const editSubmit = (data: any) => {
        client(`/vaccine/${currentVaccine._id}`, {
            method: "patch",
            data
        })
            .then(() => getVaccineArray())
            .catch((err: any) => alert(err.response.data.message))
    }

    const deleteVaccine = (id: string) => {
        client(`/vaccine/${id}`, {
            method: "delete"
        })
            .then(() => getVaccineArray())
            .catch((err: any) => alert(err.response.data.message))
    }

    useEffect(() => {
        getVaccineArray();
    }, [user])

    const values = {
        vaccineArray,
        createSubmit,
        editSubmit,
        deleteVaccine,
        currentVaccine,
        setCurrentVaccine
    }
    return <VaccineDataContext.Provider value={values}>
        {children}
    </VaccineDataContext.Provider>
}

const useVaccineData = () => useContext(VaccineDataContext);

export {
    useVaccineData,
    VaccineDataProvider
}