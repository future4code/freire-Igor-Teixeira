import styled from "styled-components";

export const ContainerMain = styled.div`
  margin: 0, auto;
  display: flex;
  width: 100%;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 36vh;
    margin: 80px auto;
  }
`;

export const ContainerNumbers = styled.div`
  width: 100%;
  background: #e1e0e0;
  right: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  div {
    display: flex;
    gap: 30px;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
    div {
      display: flex;
      gap: 30px;
    }
  }
`;

export const Sortition = styled.div`
  background: #ffeeee;
  color: #040404;
  font-size: 28px;
  width: 8vw;
  height: 15vh;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 15vw;
    height: 10vh;
  }
`;
