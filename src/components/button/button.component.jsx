
import { BaseButton, GoogleSignInButton, InvertedButton } from "./button.style";

export const BUTTON_TYPES ={
    base:'base',
    google:'google-sign-in',
    inverted:'inverted'
}

const getbutton = (buttonType = BUTTON_TYPES.base) => ({
    [BUTTON_TYPES.base]:BaseButton,
    [BUTTON_TYPES.google]:GoogleSignInButton,
    [BUTTON_TYPES.inverted]:InvertedButton,
}[buttonType])

const Button = ({children, buttonType , ...otherProps}) => {
    const CustomButton = getbutton(buttonType)
    return <CustomButton {...otherProps}>{children}</CustomButton>
}

export default Button;