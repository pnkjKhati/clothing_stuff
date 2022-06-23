import { useState } from "react"

import { createUserAuthWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import Button from "../button/button.component"
import FormInput from "../form-input/form-input.component"
import './sign-up-form.style.scss'

const defaultInputFeilds = {
    displayName : '',
    email : '',
    password : '',
    confirmPassword : ''
}

const SignUpForm = () => {
    const [inputFields, setInputFeilds] = useState(defaultInputFeilds)
    const {displayName, email, password, confirmPassword} = inputFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInputFeilds({
            ...inputFields,
            [name]:value
        })
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert("password not same")
            return
        }
        
        try{
            const {user} = await createUserAuthWithEmailAndPassword(email,password)
            await createUserDocumentFromAuth(user,{displayName})
            setInputFeilds(defaultInputFeilds)
        }catch(error){
            if(error.code == "auth/email-already-in-use"){
                alert("User cannot create, already exists")
            }
            console.log("error when create user with email and password", error.message)
        }
    }

    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span> Sign up with Your Email and password </span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required name="displayName" value={displayName} onChange={handleChange}/>

                <FormInput label="Email" type="email" required name="email" value={email} onChange={handleChange}/>

                <FormInput label="Password" type="password" required name="password" value={password} onChange={handleChange}/>

                <FormInput label="Confirm Password" type="password" required name="confirmPassword" value={confirmPassword} onChange={handleChange}/>

                <Button  type="submit"> SIGN UP </Button>
            </form>
        </div>
    )
}

export default SignUpForm;