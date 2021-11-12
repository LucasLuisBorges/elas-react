import React, { useEffect, useState } from "react";
import { Container, Text, WrapperSingIn, WrapperSingUp } from "./styles";

interface IProps {
  onClick: () => void;
  check: boolean;
  text?: string;
}

const Switch: React.FC<IProps> = ({ onClick, check, text }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(check);
  }, [check]);

  return (
    <Container onClick={onClick}>
      <WrapperSingIn checked={checked}>
        <Text>Sign In</Text>
      </WrapperSingIn>
      <WrapperSingUp checked={checked}>
        <Text>Sign Up</Text>
      </WrapperSingUp>
    </Container>
  );
};

export default Switch;
