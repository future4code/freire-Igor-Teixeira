import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 5px;
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  margin: 0;

  button {
    width: 5px;
  }
`;
export const CardComment = styled.li`
  display: flex;
  flex-direction: column;
  background-color: #efe2e2;
  list-style: none;
  border-radius: 5px;
  border: 1px solid #c1bcbc;
`;
export const User = styled.p`
  margin: 5px;
  color: #4f3535;
  display: flex;
  gap: 5px;
`;
export const Text = styled.p`
  margin: 0 0 5px 5px;
`;

export const Reactions = styled.div`
  display: flex;

  justify-content: center;
  gap: 10px;
  color: #000000;
`;
export const Vote = styled.p`
  text-align: center;
  color: white;
  background-color: #fe6564;
  border-radius: 100%;
  width: 25px;
  height: 25px;
`;
