import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    90deg,
    rgba(50, 54, 75, 1) 0%,
    rgba(60, 65, 91, 1) 10%,
    rgba(113, 200, 167, 1) 54%,
    rgba(127, 224, 187, 1) 79%
  );
  justify-content: center;
  align-items: center;
`;

export const WrapperModal = styled.div`
  display: flex;
  flex-direction: row;
  height: 60vh;
  width: 80vh;
  border-radius: 10px;


  @media (max-width: 450px) {
    height: 80%;
    width: 100%;
  }
`;

// Left
export const ContainerSlider = styled.div`
  flex: 1;
  border-radius: 10px 0 0 10px;
  background-color: #7fe0bb;
  padding: 16px;

  @media (max-width: 750px) {
    display: none;
  }
`;
export const WrapperSliderIcon = styled.div`
  width: 100%;
`;
export const SliderIcon = styled.img`
  width: 25px;
  height: 25px;
  opacity: 0.8;
`;
export const WrapperSliderContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  text-align: center;
  justify-content: space-between;
  align-items: center;
`;
export const SliderTitle = styled.h4`
  color: #eee;
  font-weight: 700;
  font-family: sans-serif;
  padding-top: 50px;
`;
export const SlicerImage = styled.img`
  width: 100px;
  height: 100px;
`;

// Right
export const ContainerSignInSignUp = styled.div`
  flex: 1;
  border-radius: 0 10px 10px 0;
  background-color: #32364b;
  padding: 16px;

  @media (max-width: 750px) {
    border-radius: 10px;

    margin: 0 20px;
  }

  @media (max-width: 450px) {
    height: 100%;
  }
`;
export const WrapperSwitch = styled.div`
  display: flex;
  height: 20px;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  padding-top: 10px;
`;
