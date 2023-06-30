import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import Button, { BUTTON_TYPES } from "../button/button.component";
import { FormContainer, PaymentFormContainer } from "./payment-form.style";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async e => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    console.log(")))))");
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ amount: 10000 })
    })
      .then(res => res.json())
      .catch(error => console.log(error));
    console.log(response, "+++++++++++++++");
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPES.inverted}>Pay Now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
