import React from "react";
import "./stripe-button.styles.scss";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JFV3ySIPG1zY6Qx1NOFLoUjPZtKhGxZitnYJCsBYu9QIu27xFzUv0I1uf4IzkoazAXeCyu8fapz6Tb4cBFCpz10007OimmtYA";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful.");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crwn Clothing Pvt. Ltd."
      billingAddress
      shippingAddress
      image={"https://svgshare.com/i/CUz.svg"}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now "
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
