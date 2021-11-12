import React, { useState } from "react";
import Button from "../Button";
import CheckBox from "../CheckBox";
import {
  Container,
  WrapperContent,
  WrapperTitles,
  SignIn,
  Or,
  SignUp,
  Form,
  WrapperTerms,
  TextTerms,
  WrapperButton,
  TextError,
} from "./styles";

interface IFormProps {
  isClicked: boolean;
  isValid?: boolean;
  isTerm?: boolean;
  messageError?: string;

  buttonText?: string;
  onPress: () => void;
  isLoading: boolean;
  isDone: boolean;

  isFocused: boolean;
}
export const FormComponent: React.FC<IFormProps> = ({
  isClicked,
  children,
  isValid,
  messageError,
  isTerm,
  buttonText,
  onPress,
  isLoading,
  isDone,
  isFocused,
}) => {
  const [checked, setChecked] = useState(false);

  return (
    <Container clicked={isFocused}>
      <WrapperContent>
        <WrapperTitles>
          <SignIn clicked={isClicked}>Sign In</SignIn>
          <Or>or</Or>
          <SignUp clicked={isClicked}>Sign Up</SignUp>
        </WrapperTitles>
        <Form>{children}</Form>
        {!isValid && <TextError>{messageError}</TextError>}
      </WrapperContent>

      {isTerm && (
        <WrapperTerms>
          <CheckBox onClick={() => setChecked(!checked)} check={checked} />
          <TextTerms>I agree all statements in terms of service</TextTerms>
        </WrapperTerms>
      )}

      <WrapperButton>
        <Button
          text={buttonText}
          check={isTerm ? checked : true}
          onClick={onPress}
          loading={isLoading}
          isDone={isDone}
        />
      </WrapperButton>
    </Container>
  );
};
