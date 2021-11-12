import React, { useEffect, useState } from "react";
import { Container, Text, Loader } from "./styles";

interface IProps {
  check: boolean;
  text?: string;
  loading: boolean;
  isDone: boolean;
  onClick: () => void;
}

const Button: React.FC<IProps> = ({
  check,
  text,
  onClick,
  loading,
  isDone
}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(check);
  }, [check]);

  return (
    <Container checked={checked} disabled={!checked} onClick={onClick}>
      {loading ? (
        <Loader />
      ) : (
        <Text>
          {isDone ? '✔️'  : text}
        </Text>
      )}
    </Container>
  );
};

export default Button;
