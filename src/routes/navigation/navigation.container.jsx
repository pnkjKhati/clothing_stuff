import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {ReactComponent as Crwnsvg} from '../../assets/crown.svg';
import CartIcon from "../../components/cart-icon/cart.icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from "./navigation.style";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectCartIsOpen } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.actions";

const Navigation = () => {
  const dispatch = useDispatch()
  const isCartOpen = useSelector(selectCartIsOpen)
  const currentUser = useSelector(selectCurrentUser)

  const signOutUser = () => dispatch(signOutStart())

    return(
      <>  
        <NavigationContainer>
            <LogoContainer to="/">
                <Crwnsvg className="logo"/>
            </LogoContainer>
            <NavLinks>
                <NavLink to="/shop">
                    SHOP
                </NavLink>
                {currentUser
                    ?
                    <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                    :
                    <NavLink to="/auth">
                        SIGN IN
                    </NavLink>
                }
                <CartIcon/>
            </NavLinks>
            { isCartOpen && <CartDropdown/>}
        </NavigationContainer>
        <Outlet/>
      </>
    )
  }

export default Navigation;