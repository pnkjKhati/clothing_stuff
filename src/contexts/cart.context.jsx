import { createContext,useState, useEffect } from "react";

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
    addProductToCart: () => {},
    cartCount: 0
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [ cartItems, setCartItems ] = useState([])
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
       setCartCount(cartItems.reduce((total, currItem) => {
                return total + currItem.quantity;
        },0))
    },[cartItems])

    const addProductToCart = (productToAdd) => {
        setCartItems(addItemsToCart(cartItems,productToAdd))
    }

    const value = {isCartOpen, setIsCartOpen, addProductToCart, cartItems, cartCount}
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}