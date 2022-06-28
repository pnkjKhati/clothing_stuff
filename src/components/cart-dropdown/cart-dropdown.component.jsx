import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context"
import Button from "../button/button.component"

import './cart-dropdown.style.scss'
import React from "react"
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems?.map( item => <CartItem key={item.id} cartItem={item}/>)
                }
            </div>
            <Button>Go To Checkout</Button>
        </div>
    )
}

export default CartDropdown;