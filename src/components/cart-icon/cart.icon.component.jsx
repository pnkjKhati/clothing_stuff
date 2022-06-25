import {useContext} from 'react'
import {ReactComponent as ShopIcon} from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.component'

import "./cart.icon.style.scss"

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext)
    const toggleIsCartOpen = () => { setIsCartOpen(!isCartOpen)}
    return(
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShopIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon;