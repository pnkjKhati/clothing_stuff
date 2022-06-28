import {useContext} from 'react'

import { CartContext } from '../../contexts/cart.context'
import Button from '../button/button.component'
import './product-card.scss'

const ProductCard = ({product}) => {
    const { addProductToCart} = useContext(CartContext)
    const {name,price,imageUrl} = product
    return(
        <div className='product-card-container' >
            <img src={`${imageUrl}`} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button onClick={() => addProductToCart(product) } buttonType="invert">Add to Card</Button>
        </div>
    )
}

export default ProductCard;