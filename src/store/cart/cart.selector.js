import { createSelector } from "reselect";

const selectCartReducer = state => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  cart => cart.cartItems
);

export const selectCartIsOpen = createSelector(
  [selectCartReducer],
  cart => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((total, currItem) => {
    return total + currItem.quantity;
  }, 0)
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((total, currItem) => {
    return total + currItem.quantity * currItem.price;
  }, 0)
);

// const newCartCount = newCartItems.reduce((total, currItem) => {
//   return total + currItem.quantity;
// }, 0);

// const newCartTotal = newCartItems.reduce((total, currItem) => {
//   return total + currItem.quantity * currItem.price;
// }, 0);
