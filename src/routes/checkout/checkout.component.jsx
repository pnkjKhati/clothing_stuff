import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.style';

const CheckOut = () => {
    const { cartItems, cartTotal} = useContext(CartContext)
    return(
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
                {cartItems.map((cartItem) => (
                    <CheckOutItem key={cartItem.id} cartItem={cartItem} />                   
                ))}
            <Total>Total ${cartTotal}</Total>
        </CheckoutContainer>
    )
}

export default CheckOut;