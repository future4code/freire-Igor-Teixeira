import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 45px;
    text-align: center;
    
  }
  a {
    text-decoration: none;
  }
`;

export const Form = styled.form`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 15px;

  input {
    width: 260px;
  }

  button {
    width: 250px;
  }
`;

export const Check = styled.div`
  display: flex;
  margin: 0;
`;

export const Text = styled.div`
  display: flex;
  text-align: center;
  margin: 0 10px;
`;
