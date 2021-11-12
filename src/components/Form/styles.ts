import styled, { css } from "styled-components";

interface IProps {
  clicked: boolean;
}

export const Container = styled.div`
  animation: opa 1s;

  ${(props: IProps) =>
    props.clicked &&
    css`
      @keyframes opa {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 0.6;
        }
        50% {
          opacity: 0.6;
        }
        100% {
          opacity: 1;
        }
      }
    `};
`;

export const WrapperContent = styled.div`
  margin: 60px 30px 20px 30px;

  @media (max-width: 450px) {
    margin: 30px 30px;

  }
`;
export const WrapperTitles = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 40px;

  @media (max-width: 450px) {
    display: flex;

    justify-content: center;
    margin-bottom: 20px;
  }
`;
export const SignIn = styled.h3`
  font-family: sans-serif;
  color: ${(props: IProps) =>
    props.clicked ? "#eee" : "rgba(255, 255, 255, 0.5)"};
  border-bottom: ${(props: IProps) =>
    props.clicked ? "1px solid #7fe0bb" : "none"};
  padding-bottom: 5px;
`;
export const Or = styled.h5`
  font-family: sans-serif;
  color: rgba(255, 255, 255, 0.5);
  padding: 0 10px 5px 10px;
`;
export const SignUp = styled.h3`
  font-family: sans-serif;
  color: ${(props: IProps) =>
    !props.clicked ? "#eee" : "rgba(255, 255, 255, 0.5)"};
  border-bottom: ${(props: IProps) =>
    !props.clicked ? "1px solid #7fe0bb" : "none"};
  padding-bottom: 5px;
`;

export const Form = styled.div``;
export const WrapperTerms = styled.div`
  display: flex;
  margin: 20px 30px;
  align-items: center;
`;
export const TextTerms = styled.div`
  padding-left: 10px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.3);
`;

export const WrapperButton = styled.div`
  margin: 30px 0 0 30px;

  @media (max-width: 750px) {
    margin: 30px auto;
    display: flex;
    width: 100%;
  }
`;

// Text error
export const TextError = styled.h5`
  font-family: sans-serif;
  color: #e94e4e;
  font-size: 10px;
`;
