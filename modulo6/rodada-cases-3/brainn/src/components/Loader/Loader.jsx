import styled from "styled-components";

const Container = styled.p`
  border: 16px solid #e8e5e5; /* Light grey */
  border-top: 16px solid #6befa3; /* Blue */
  border-radius: 100%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Loader = () => {
  return <Container></Container>;
};
