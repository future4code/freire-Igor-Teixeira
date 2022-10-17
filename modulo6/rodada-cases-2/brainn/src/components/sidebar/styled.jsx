import styled from "styled-components";
export const ContainerName = styled.div`
  height: 100vh;
  background: #f7dada;
  display: flex;
  #svg-name {
    height: auto;
    width: auto;
    display: flex;
    position: relative;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 40vh;
    flex-direction: column;

    #svg-name {
      transform: rotate(90deg);
      position: absolute;
      top: -143px;
    }
  }
`;
export const TextDraw = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding-left: 30px;
  background: transparent;
  height: 98vh;
  color: white;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    position: relative;
    padding-left: 0;
    justify-content: flex-start;
    width: 100vw;
    height: 40vh;
    text-align: center;
    align-items: center;
  }
`;
export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  img {
    width: 45px;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
  }
`;
export const Select = styled.select`
  width: 150px;
  height: 30px;
  border-radius: 10px;
  border: none;
  text-align: center;
  text-transform: uppercase;
`;
export const DateDraw = styled.div``;
