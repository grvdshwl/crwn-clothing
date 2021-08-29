import React from "react";
import "./stripe-button.styles.scss";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JFV3ySIPG1zY6Qx1NOFLoUjPZtKhGxZitnYJCsBYu9QIu27xFzUv0I1uf4IzkoazAXeCyu8fapz6Tb4cBFCpz10007OimmtYA";

  const onToken = (token, data) => {
    axios({
      url: "http://localhost:5000/payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert("Payment successful");
      })
      .catch((error) => {
        console.log("Payment error:", JSON.parse(error));
        alert(
          "There was an issue with your payment.Please make sure you use a provided credit card."
        );
      });
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
