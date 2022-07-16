import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #090809;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    margin-right: 2px;
    align-items: center;
    
  }
`;
export const ConLogo = styled.div`
  
`
  
export const Logo = styled.img`
  width: 160px;
  margin-left: 5px;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 120px;
  }
`;
