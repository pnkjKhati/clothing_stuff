import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import {ReactComponent as Crwnsvg} from '../../assets/crown.svg';
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart.icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import { CartContext } from "../../contexts/cart.context";
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from "./navigation.style";
import { selectCurrentUser } from "../../store/user/user.selector";

const Navigation = () => {
  const {isCartOpen} = useContext(CartContext)
  const currentUser = useSelector(selectCurrentUser)

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