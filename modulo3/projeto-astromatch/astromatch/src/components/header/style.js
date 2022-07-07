import styled from "styled-components";



export const Container = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: auto;
  height: 60px;
  
  box-shadow: 0px 0px 20px #282526a0;
  border-radius: 10px;
  background-image: linear-gradient( #ff5667);
  font-family: "Dancing Script", cursive;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
