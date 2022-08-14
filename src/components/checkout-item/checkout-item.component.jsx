import { useDispatch, useSelector } from 'react-redux';
import './checkout-item.style.scss';

import { addProductToCart, removeProductToCart, clearItemFromCart } from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';
 

const CheckOutItem = ({cartItem}) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const { name, price, imageUrl, quantity } = cartItem;

    const addProductHandler = () => dispatch(addProductToCart( cartItems, cartItem)) 
    const removeProductHandler = () => dispatch(removeProductToCart(cartItems, cartItem)) 
    const clearProductHandler = () => dispatch(clearItemFromCart(cartItems, cartItem)) 
    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'> {name} </span>
            <span className='quantity'> 
                <div className='arrow' onClick={removeProductHandler}> &#10094; </div>
                <span className='value'> {quantity} </span>
                <div className='arrow' onClick={addProductHandler}> &#10095; </div>
            </span>  
            <span className='price'> {price} </span>
            <span className='remove-button' onClick={clearProductHandler}> &#10005; </span>
        </div>
    )
}   

export default CheckOutItem