import React from "react";
import styled from "styled-components";

import SignUp from "../../components/sign-up/sign-up.component";

import SignIn from "../../components/sign-in/sign-in.component";

const SignInAndSignUpPageContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`;

const SignInAndSignUpPage = () => (
  <SignInAndSignUpPageContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpPageContainer>
);

export default SignInAndSignUpPage;
