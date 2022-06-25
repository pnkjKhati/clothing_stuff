import { createContext, useState } from "react";
import Shop_data from "../shop-data.json";

export const ProductsContext = createContext({
    products:[]
})

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(Shop_data)
    return(
        <ProductsContext.Provider value={{products}}>{children}</ProductsContext.Provider>
    )
}