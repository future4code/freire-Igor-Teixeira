import styled from "styled-components";

export const Container = styled.div`
  color: white;
  animation: gradient 15s ease infinite;
  background: linear-gradient(-45deg, #011523, #062a45, #042c4a, #2b95e5)
    no-repeat;
  background-size: 300% 300%;
  text-align: center;

  @keyframes gradient {
    0% {
      background-position: 0 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0 50%;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin: 20px;
  }
`;

export const Card = styled.div`
  list-style: none;
  width: 400px;
  padding: 20px;
  text-align: left;
  border-radius: 21px;
  background: #0f5e9a;
  box-shadow: inset 45px 45px 74px #0b3858, inset -45px -45px 74px #08375b;
  font-family: "Comfortaa", cursive;
  margin-bottom: 40px;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 98vw;
  }
`;

export const Aprov = styled.div`
  display: flex;
  justify-content: space-evenly;

  button {
    width: 35px;
  }
`;
