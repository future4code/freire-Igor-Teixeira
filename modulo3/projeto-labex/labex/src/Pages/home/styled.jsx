import styled from "styled-components";

export const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;

  .carousel-perso {
    height: 300px;
    cursor: grab;
    user-select: none;
  }
  .carousel-perso:active {
    cursor: grabbing;
  }
  .react-multi-carousel-item {
    display: flex;
    justify-content: center;
  }
`;
export const Img = styled.img`
  width: 160px;
  height: 150px;
  border-radius: 15px;
  margin: 3px;
  -webkit-box-shadow: -2px 18px 38px 12px #00000050;
  box-shadow: -2px 18px 38px 12px #00000033;
`;

export const CardImg = styled.div`
  background-color: #00000046;
  border-radius: 15px;
  -webkit-box-shadow: 2px -3px 36px 16px #0000004b;
  box-shadow: 2px -3px 36px 16px #00000038;
  width: 200px;
  height: 250px;
  margin: 15px;

  p {
    margin: 5px;
  }
`;

export const Logo = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 44vh;
  }

  img {
    width: 600px;
    height: 90%;
    @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
      width: 90vw;
    }
  }
`;

export const Who = styled.button`
  color: white;
  background-color: #166fea55;
  margin-bottom: 15px;
  width: 150px;
  height: 40px;
`;
