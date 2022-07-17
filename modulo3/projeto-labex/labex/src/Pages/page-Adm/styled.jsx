import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  div {
    justify-content: space-evenly;
    display: flex;
    flex-direction: row;
    width: 450px;
    margin: 15px 15px;
  }
`;

export const Card = styled.li`
  background-color: #2e4ede;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 10px;
  border-radius: 10px;
  box-shadow: 5px 5px #0b0f1c3a;
  width: 300px;
  height: 60px;

  button {
    background-color: transparent;
    width: 30px;
    height: 30px;
    padding: 0;
  }
`;
