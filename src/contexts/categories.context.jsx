import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocument, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";
// import Shop_data from "../shop-data.js";

export const CategoriesContext = createContext({
    CategoriesMap:{}
})

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({})

    // Storing batch of data to database

    // useEffect(()=>{
    //     addCollectionAndDocument('categories', Shop_data)
    // },[])

    useEffect(() => {
        const getCategoryMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            setCategoriesMap(categoryMap)
        }
        getCategoryMap()
    },[])

    return(
        <CategoriesContext.Provider value={{categoriesMap}}>{children}</CategoriesContext.Provider>
    )
}