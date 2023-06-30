import { useNavigate } from "react-router-dom";

import Button from "../button/button.component"

import React from "react"
import CartItem from "../cart-item/cart-item.component";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.style";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {
    const navigate = useNavigate()
    const cartItems = useSelector(selectCartItems)
    
    const goToCheckoutPage = () => {
        navigate('checkout')
    }

    return(
        <CartDropdownContainer>
            <CartItems>
                { cartItems.length 
                    ? (cartItems?.map( item => <CartItem key={item.id} cartItem={item}/>))
                    : <EmptyMessage> Youe cart is empty </EmptyMessage>
                }
                
            </CartItems>
            <Button onClick={goToCheckoutPage}>Go To Checkout</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;