import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useAxios } from "./AxiosProvider";
import { useAuth } from "./AuthProvider";

type AnimalDataContextType = {
    animalArray: Array<any> | null
    createSubmit(data: any): void
    currentAnimal: any | null
    setCurrentAnimal(value: any): void
    editSubmit(data: any): void
    deleteAnimal(id: string): void
}

const AnimalDataContext = createContext<AnimalDataContextType>({
    animalArray: [],
    createSubmit: () => { },
    currentAnimal: null,
    setCurrentAnimal: () => { },
    editSubmit: () => { },
    deleteAnimal: () => { }
})

const AnimalDataProvider = ({ children }: { children: ReactNode }) => {
    const [currentAnimal, setCurrentAnimal] = useState<any>(null);
    const [animalArray, setAnimalArray] = useState<Array<any> | null>(null);
    const { client } = useAxios();
    const { user } = useAuth();

    const getAnimalData = () => {
        if (user) {
            client(`/animal`, {
                method: "get"
            })
                .then((response: any) => response.data)
                .then((data: any) => {
                    setAnimalArray(data.message);
                })
                .catch((err: any) => alert(err.response.data.message));
        }
    }

    const createSubmit = (data: any) => {
        if (data.mother_id === "0") delete data.mother_id;
        if (data.folk_id === "0") delete data.folk_id;
        client(`/animal`, {
            method: "post",
            data
        })
            .then(() => {
                getAnimalData();
            })
            .catch((err: any) => {
                alert(err.response.data.message)
            });
    }

    const editSubmit = (data: any) => {
        if (data.mother_id === "0") delete data.mother_id;
        if (data.folk_id === "0") delete data.folk_id;
        client(`/animal/${currentAnimal?._id}`, {
            method: "patch",
            data
        })
            .then(() => {
                getAnimalData();
            })
            .catch((err: any) => {
                alert(err.response.data.message)
            });
    }

    const deleteAnimal = (id: string) => {
        client(`/animal/${id}`, {
            method: "delete"
        })
            .then(() => {
                getAnimalData();
            })
            .catch((err: any) => {
                alert(err.response.data.message)
            });
    }

    useEffect(() => {
        getAnimalData();
    }, [user])

    const values = {
        animalArray,
        createSubmit,
        currentAnimal,
        setCurrentAnimal,
        editSubmit,
        deleteAnimal
    }

    return <AnimalDataContext.Provider value={values}>
        {children}
    </AnimalDataContext.Provider>
}

const useAnimalData = () => useContext(AnimalDataContext);

export {
    useAnimalData,
    AnimalDataProvider
}