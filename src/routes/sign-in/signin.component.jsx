import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils"


const SignIn = () => {
    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup()
        createUserDocumentFromAuth(user)
    }
    return(
        <div>
            Sign IN
            <button onClick={logGoogleUser}>Continue with Google</button>
        </div>
    )
}

export default SignIn