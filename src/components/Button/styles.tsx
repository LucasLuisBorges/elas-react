import styled from "styled-components";

interface IProps {
  checked?: boolean;
}
export const Container = styled.button`
  display: flex;
  width: 100px;
  height: 30px;
  background-color: ${(props: IProps) =>
    props.checked ? "rgba(127, 224, 187, 1)" : "#434864"};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 750px) {
    width: 60%;
    margin: 0 auto;
  }
`;

export const Text = styled.h5`
  color: rgba(255, 255, 255, 1);
  font-family: sans-serif;
  font-weight: 400;
`;

export const Loader = styled.div`
  border: 5px solid #32364b;
  border-top: 5px solid transparent;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
