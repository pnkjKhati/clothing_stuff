import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

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

const initialState = {
    isCartOpen:false,
    cartItems:[],
    cartCount: 0,
    cartTotal: 0
}

const ACTION_CART_REDUCER = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

const cartReducer = ( state, { type, payload } ) => {

    switch(type){

        case ACTION_CART_REDUCER.SET_CART_ITEMS :
            return {
                ...state,
                ...payload
            }
        case ACTION_CART_REDUCER.SET_IS_CART_OPEN: 
            return {
                ...state,
                isCartOpen:payload
            }
        default :
            throw new Error(` Unhandled error ${type} in cartReducer`)
    }
}



export const CartProvider = ({children}) => {

    const [ state, dispatch ] = useReducer( cartReducer, initialState )
    const {
        isCartOpen,
        cartItems, 
        cartCount, 
        cartTotal
    } = state;

    const updateCartItemReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, currItem) => {
            return total + currItem.quantity;
        },0)

        const newCartTotal = newCartItems.reduce((total, currItem) => {
            return total + currItem.quantity * currItem.price;
        },0)

        dispatch(
            createAction(
                ACTION_CART_REDUCER.SET_CART_ITEMS,
                {
                cartCount: newCartCount,
                cartTotal: newCartTotal,
                cartItems: newCartItems
                }
            )
        )
    }

    const addProductToCart = (productToAdd) => {
        const newCartItems = addItemsToCart(cartItems,productToAdd)
        updateCartItemReducer(newCartItems);
    }

    const removeProductToCart = (cartItemToRemove) => {
        const newCartItems = romoveCartItem(cartItems,cartItemToRemove)
        updateCartItemReducer(newCartItems);
    }

    const clearItemFromCart = (cartItemToclear) => {
        const newCartItems = clearCartItem(cartItems,cartItemToclear)
        updateCartItemReducer(newCartItems);
    }

    const setIsCartOpen = (bool) => {
        dispatch(createAction(ACTION_CART_REDUCER.SET_IS_CART_OPEN, bool))
    }

    const value = {
        isCartOpen, 
        setIsCartOpen, 
        addProductToCart, 
        removeProductToCart, 
        clearItemFromCart, 
        cartItems, 
        cartCount, 
        cartTotal
    }
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}