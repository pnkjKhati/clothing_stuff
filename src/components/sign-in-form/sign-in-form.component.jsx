import { useState } from "react"

import { signInWithGooglePopup, createUserDocumentFromAuth, signInUserAuthWithEmailAndPassword } from "../../utils/firebase/firebase.utils"
import Button from "../button/button.component"
import FormInput from "../form-input/form-input.component"
import './sign-in-form.style.scss'

const defaultInputFeilds = {
    email : '',
    password : '',
}

const SignInForm = () => {
    const [inputFields, setInputFeilds] = useState(defaultInputFeilds)
    const { email, password } = inputFields

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInputFeilds({
            ...inputFields,
            [name]:value
        })
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
       
        try{
            const response = await signInUserAuthWithEmailAndPassword(email, password)
            console.log(response)
            setInputFeilds(defaultInputFeilds)
        }catch(error){
            switch(error.code){
                case 'auth/wrong-password':
                    alert(" Wrong Password! ")
                    break
                case 'auth/user-not-found':
                    alert(" No user associated with this email! ")
                    break
                default:
                    console.log(error)
            }
        }
    }

    const signInWithGoogle = async() => {
        const {user} = await signInWithGooglePopup()
        createUserDocumentFromAuth(user)
    }

    return(
        <div className="sign-in-container">
            <h2>Already  have an account?</h2>
            <span> Sign in with Your Email and password </span>
            <form onSubmit={handleSubmit}>

                <FormInput label="Email" type="email" required name="email" value={email} onChange={handleChange}/>

                <FormInput label="Password" type="password" required name="password" value={password} onChange={handleChange}/>

                <div className="buttons-container">
                    <Button  type="submit"> SIGN IN </Button>
                    <Button  type="button" buttonType="google" onClick={signInWithGoogle}> 
                        GOOGLE SIGN IN 
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;