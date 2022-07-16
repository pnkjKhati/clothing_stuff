import { createContext,useState, useEffect } from "react";

const addItemsToCart = (cartItems,productToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)
    if(existingCartItem){
        return cartItems.map((cartItem) => 
        cartItem.id === productToAdd.id 
            ? {...cartItem, quantity:cartItem.quantity + 1}
            : cartItem
        )
    }
    return [...cartItems,{...productToAdd, quantity:1}]
}

const romoveCartItem = (cartItems,cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)
    if(existingCartItem.quantity === 1 ){
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map((cartItem) => 
        cartItem.id === cartItemToRemove.id
            ? {...cartItem,quantity: cartItem.quantity -1 }
            : cartItem
        )
}

const clearCartItem = (cartItems, cartItemToclear) =>  cartItems.filter((cartItem) => cartItem.id !== cartItemToclear.id)

export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen: () => {},
    cartItems:[],
    addProductToCart: () => {},
    removeProductToCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [ cartItems, setCartItems ] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
       setCartCount(cartItems.reduce((total, currItem) => {
                return total + currItem.quantity;
        },0))
    },[cartItems])

    useEffect(() => {
        setCartTotal(cartItems.reduce((total, currItem) => {
                 return total + currItem.quantity * currItem.price;
         },0))
     },[cartItems])

    const addProductToCart = (productToAdd) => {
        setCartItems(addItemsToCart(cartItems,productToAdd))
    }

    const removeProductToCart = (cartItemToRemove) => {
        setCartItems(romoveCartItem(cartItems,cartItemToRemove))
    }

    const clearItemFromCart = (cartItemToclear) => {
        setCartItems(clearCartItem(cartItems,cartItemToclear))
    }

    const value = {isCartOpen, setIsCartOpen, addProductToCart, removeProductToCart, clearItemFromCart, cartItems, cartCount, cartTotal}
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}