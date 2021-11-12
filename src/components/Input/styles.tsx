import styled from "styled-components";

interface IInput {
  confirmed: boolean;
}

export const Container = styled.div`
  margin: 20px 0;
`;

export const Text = styled.h5`
  color: rgba(255, 255, 255, 0.8);
  font-family: sans-serif;
  padding-bottom: 8px;
`;

export const Input = styled.input`
  color: #eee;
  outline: none;
  background-color: transparent;
  padding-bottom: 10px;
  width: 100%;
  border-bottom: 1px solid
    ${(props: IInput) =>
      props.confirmed ? "#7fe0bb" : "rgba(255, 255, 255, 0.2)"};

  :focus {
    border-bottom: 1px solid #7fe0bb;
  }
`;

export const WrapperInput = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Image = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  right: 0;
`;
