import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user.actions";
import { selectCurrentUser } from "../../store/user/user.selector";
import Button, { BUTTON_TYPES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { ButtonsContainer, SignInContainer } from "./sign-in-form.style";

const defaultInputFeilds = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [inputFields, setInputFeilds] = useState(defaultInputFeilds);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);

  const { email, password } = inputFields;

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputFeilds({
      ...inputFields,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      setInputFeilds(defaultInputFeilds);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert(" Wrong Password! ");
          break;
        case "auth/user-not-found":
          alert(" No user associated with this email! ");
          break;
        default:
          console.log(error);
      }
    }
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span> Sign in with Your Email and password </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />

        <ButtonsContainer>
          <Button type="submit"> SIGN IN </Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPES.google}
            onClick={signInWithGoogle}
          >
            GOOGLE SIGN IN
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
