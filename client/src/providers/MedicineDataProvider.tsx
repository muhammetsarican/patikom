import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useAxios } from "./AxiosProvider";
import { useAuth } from "./AuthProvider";

type MedicineDataContextType = { medicineArray: any };

const MedicineDataContext = createContext<MedicineDataContextType>({ medicineArray: null });

const MedicineDataProvider = ({ children }: { children: ReactNode }) => {
    const [medicineArray, setMedicineArray] = useState<any>(null);

    const { client } = useAxios();
    const { user } = useAuth();

    const getMedicineArray = () => {
        if (user) {
            client("/medicine", {
                method: "get"
            })
                .then((response: any) => response.data)
                .then((data: any) => setMedicineArray(data.message))
                .catch((err: any) => alert(err.response.data.message))
        }
    }

    useEffect(() => {
        getMedicineArray();
    }, [user]);

    const values = { medicineArray };

    return <MedicineDataContext.Provider value={values}>
        {children}
    </MedicineDataContext.Provider>
}

const useMedicineData = () => useContext(MedicineDataContext);

export {
    useMedicineData,
    MedicineDataProvider
}