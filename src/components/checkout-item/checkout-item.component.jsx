import { useContext } from 'react';
import './checkout-item.style.scss';
 
import { CartContext } from '../../contexts/cart.context';

const CheckOutItem = ({cartItem}) => {
    const {addProductToCart,removeProductToCart, clearItemFromCart} = useContext(CartContext);
    const { name, price, imageUrl, quantity } = cartItem;

    const addProductHandler = () => addProductToCart(cartItem) 
    const removeProductHandler = () => removeProductToCart(cartItem) 
    const clearProductHandler = () => clearItemFromCart(cartItem) 
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