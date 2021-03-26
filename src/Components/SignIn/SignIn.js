import React from "react";
import {
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormLable,
  FormInput,
  FormWrap,
  Icon,
  SignInComponents,
  Text,
} from "./SignInElements";

const SignIn = () => {
  return (
    <>
      <SignInComponents>
        <FormWrap>
          <Icon to="/">dolla</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign In</FormH1>
              <FormLable htmlFor="for">Email</FormLable>
              <FormInput type="email" required />
              <FormLable htmlFor="for">Password</FormLable>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </SignInComponents>
    </>
  );
};

export default SignIn;
