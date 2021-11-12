import styled from "styled-components";

interface IProps {
  checked: boolean;
}
export const Container = styled.button`
  display: flex;
  width: 15px;
  height: 15px;
  background-color: ${(props: IProps) =>
    props.checked ? "#7fe0bb" : "transparent"};
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  border: ${(props: IProps) =>
    props.checked ? 'none' : '1px solid rgba(255, 255, 255, 0.2)'};
`;

export const CheckBoxImage = styled.img`
  width: 12px;
  height: 12px;
`;
