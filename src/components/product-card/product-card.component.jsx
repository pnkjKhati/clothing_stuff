import { useDispatch , useSelector} from 'react-redux'
import { addProductToCart } from '../../store/cart/cart.actions'
import { selectCartItems } from '../../store/cart/cart.selector'

import Button, { BUTTON_TYPES } from '../button/button.component'
import { Footer, Image, ProductCardContainer } from './product-card'

const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const {name,price,imageUrl} = product
    return(
        <ProductCardContainer >
            <Image src={`${imageUrl}`} alt={`${name}`}/>
            <Footer>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </Footer>
            <Button onClick={() => dispatch(addProductToCart(cartItems, product)) } buttonType={BUTTON_TYPES.inverted}>Add to Card</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;