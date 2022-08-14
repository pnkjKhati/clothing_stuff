import { useDispatch, useSelector } from 'react-redux'
import { setIsCartOpen } from '../../store/cart/cart.actions'
import { selectCartCount, selectCartIsOpen } from '../../store/cart/cart.selector'
import { CartIconContainer, ItemCount, ShopIcon } from './cart.icon.style'


const CartIcon = () => {
    const dispatch = useDispatch()
    
    const isCartOpen = useSelector(selectCartIsOpen)
    const cartCount = useSelector(selectCartCount)
    const toggleIsCartOpen = () => { dispatch(setIsCartOpen(!isCartOpen))}
    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShopIcon/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;