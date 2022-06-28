import { createContext,useState } from "react";

const addItemsToCart = (cartItems,productToAdd) => {
    const isExistingItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)
    if(isExistingItem){
        return cartItems.map((cartItem) => 
        cartItem.id === productToAdd.id 
            ? {...cartItem, quantity:cartItem.quantity + 1}
            : cartItem
        )
    }
    return [...cartItems,{...productToAdd, quantity:1}]
}

export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen: () => {},
    cartItems:[],
    addProductToCart: () => {}
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [ cartItems, setCartItems ] = useState([])

    const addProductToCart = (productToAdd) => {
        setCartItems(addItemsToCart(cartItems,productToAdd))
    }

    const value = {isCartOpen, setIsCartOpen, addProductToCart,cartItems}
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}