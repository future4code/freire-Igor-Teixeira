import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const Form = styled.form`
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

export const Img = styled.img`
  width: 150px;
  margin-top: 50px;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin:15px;

  h1 {
    margin: 10px;
  }
`;
export const Border = styled.hr`
  margin: 0;
  height: 3px;
  width: 250px;
  background: linear-gradient(#f25757, #f26b6b, #f2bbb6, #f26b6b, #f25757);
`;
