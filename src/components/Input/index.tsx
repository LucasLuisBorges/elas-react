import React, { useState } from "react";
import { Container, Text, Input, WrapperInput, Image } from "./styles";

import eye from "../../assets/images/eye.png";
import noeye from "../../assets/images/noeye.png";

interface IProps {
  text: string;
  placeholder: string;
  value: string;
  security?: boolean;
  confirmed: boolean;
  onChange: (e: any) => void;
}
const Inputs = ({
  placeholder,
  text,
  onChange,
  value,
  security,
  confirmed,
}: IProps) => {
  const [visible, setVisible] = useState(true);
  return (
    <Container>
      <Text>{text}</Text>
      <WrapperInput>
        <Input
          confirmed={confirmed}
          type={security && visible ? "password" : "text"}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {security && (
          <Image
            onClick={() => setVisible(!visible)}
            src={visible ? noeye : eye}
          />
        )}
      </WrapperInput>
    </Container>
  );
};

export default Inputs;
