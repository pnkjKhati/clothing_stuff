import {CartItemContainer, ItemDetails, Img} from './cart-item.style.jsx'

const CartItem = ({cartItem}) => {

    const {name, imageUrl, price, quantity} = cartItem;

    return(
        <CartItemContainer>
            <Img src={imageUrl} alt={`${name}`}/>
            <ItemDetails>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x {price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;