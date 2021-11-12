import React, { useEffect, useState } from "react";
import { Container, CheckBoxImage } from "./styles";
import checkImage from "../../assets/images/check.png";

interface IProps {
  onClick: () => void;
  check: boolean;
}

const CheckBox: React.FC<IProps> = ({ onClick, check }) => {
  const [checked, setChecked] = useState(false);

  useEffect(()=> {
    setChecked(check)
  },[check])

  return (
    <Container
      onClick={onClick}
      checked={checked}
    >
      {checked && <CheckBoxImage src={checkImage} />}
    </Container>
  );
};

export default CheckBox;
