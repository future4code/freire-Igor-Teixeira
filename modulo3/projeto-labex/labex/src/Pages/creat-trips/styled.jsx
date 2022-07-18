import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 30px;

  input {
    width: 300px;
  }
  select {
    width: 280px;
  }
`;

export const Form = styled.form`
  background-color: #f4f4f47c;
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
  justify-content: space-between;
`;
