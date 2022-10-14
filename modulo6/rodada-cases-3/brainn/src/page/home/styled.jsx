import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #e1e0e0;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
  }
`;
