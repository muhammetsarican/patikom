import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useAxios } from "./AxiosProvider";
import { useAuth } from "./AuthProvider";

type CategoryDataContextType = { categoryArray: any };

const CategoryDataContext = createContext<CategoryDataContextType>({ categoryArray: null });

const CategoryDataProvider = ({ children }: { children: ReactNode }) => {
    const [categoryArray, setCategoryArray] = useState<any>(null);

    const { client } = useAxios();
    const { user } = useAuth();

    const getCategoryArray = () => {
        if (user) {
            client("/category", {
                method: "get"
            })
                .then((response: any) => response.data)
                .then((data: any) => setCategoryArray(data.message))
                .catch((err: any) => alert(err.response.data.message))
        }
    }

    useEffect(() => {
        getCategoryArray();
    }, [user]);

    const values = { categoryArray };

    return <CategoryDataContext.Provider value={values}>
        {children}
    </CategoryDataContext.Provider>
}

const useCategoryData = () => useContext(CategoryDataContext);

export {
    useCategoryData,
    CategoryDataProvider
}