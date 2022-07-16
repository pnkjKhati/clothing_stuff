import {useContext} from 'react'

import { CartContext } from '../../contexts/cart.context'
import Button, { BUTTON_TYPES } from '../button/button.component'
import { Footer, Image, ProductCardContainer } from './product-card'
// import './product-card.scss'

const ProductCard = ({product}) => {
    const { addProductToCart} = useContext(CartContext)
    const {name,price,imageUrl} = product
    return(
        <ProductCardContainer >
            <Image src={`${imageUrl}`} alt={`${name}`}/>
            <Footer>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </Footer>
            <Button onClick={() => addProductToCart(product) } buttonType={BUTTON_TYPES.inverted}>Add to Card</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;