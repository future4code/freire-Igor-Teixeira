import styled from "styled-components";

export const Container = styled.div`
  color: #fffbfb;
  .BoxCarousel {
    cursor: grab;
    user-select: none;
  }
  .BoxCarousel:active {
    cursor: grabbing;
  }

  .CarouselPersonalizacao {
    margin: 50px 0px;
  }

  h1 {
    padding: 30px;
  }
`;
export const Botoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 45px;
`;

// export const ContCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 10px;
//   margin: 10px 10px;
//   font-family: "Comfortaa", cursive;

// `;

export const Card = styled.li`
  list-style: none;
  width: 400px;
  height: 230px;
  padding: 20px;
  text-align: left;
  border-radius: 21px;
  background: #0f5e9a;
  box-shadow: inset 45px 45px 74px #0b3858, inset -45px -45px 74px #08375b;
  font-family: "Comfortaa", cursive;
  text-shadow: 5px 1px 5px #00000099;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 99vw;
  }
`;

export const Title = styled.h3`
  text-align: center;
  margin: 5px;
`;
export const Text = styled.p`
  margin: 10px;
`;
export const ButtonInsc = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border-radius: 50px;
    width: 35px;
    height: 35px;
    background-color: #035390;
  }
  button:hover {
    background-color: #072a45;
  }
`;
