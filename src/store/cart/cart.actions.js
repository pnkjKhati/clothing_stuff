import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

const addItemsToCart = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map(
      cartItem =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const romoveCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map(
    cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToclear) =>
  cartItems.filter(cartItem => cartItem.id !== cartItemToclear.id);

export const setIsCartOpen = boolean =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addProductToCart = (cartItems, productToAdd) => {
  const newCartItems = addItemsToCart(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeProductToCart = (cartItems, cartItemToRemove) => {
  const newCartItems = romoveCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToclear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToclear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
