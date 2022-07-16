import styled from "styled-components";

export const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;

  .carousel-perso {
    height: 300px;
  }
`;
export const Img = styled.img`
  width: 160px;
  height: 190px;
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
`;

export const Logo = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: space-around;

  img {
    width: 600px;
    height: 90%;
  }
`;
