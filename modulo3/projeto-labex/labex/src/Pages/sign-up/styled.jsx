import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  input {
    width: 300px;
  }

  select {
    width: 280px;
  }
`;
export const Form = styled.form`
  background-color: #6188f0;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 15px;
  margin: 15px;
  padding: 10px;
  gap: 10px;
`;
export const Button = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-around;
`;
