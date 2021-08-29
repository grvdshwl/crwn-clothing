import React from "react";
import {
  CheckoutPageContainer,
  CheckoutHeaderDiv,
  HeaderBlockDiv,
  TotalDiv,
  TestWarningDiv,
} from "./checkout-page.styles";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderDiv>
      <HeaderBlockDiv>
        <span>Product</span>
      </HeaderBlockDiv>

      <HeaderBlockDiv>
        <span>Description</span>
      </HeaderBlockDiv>

      <HeaderBlockDiv>
        <span>Quantity</span>
      </HeaderBlockDiv>

      <HeaderBlockDiv>
        <span>Price</span>
      </HeaderBlockDiv>

      <HeaderBlockDiv>
        <span>Remove</span>
      </HeaderBlockDiv>
    </CheckoutHeaderDiv>

    {cartItems.length
      ? cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      : null}
    <TotalDiv className="total">Total : ${total}</TotalDiv>
    <TestWarningDiv className="test-warning">
      *Please use the following test credit cards for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/30 - CVV: 158
      <br />
      5555 5555 5555 4444 - Exp: 08/32 - CVV: 297
    </TestWarningDiv>
    <StripeButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
