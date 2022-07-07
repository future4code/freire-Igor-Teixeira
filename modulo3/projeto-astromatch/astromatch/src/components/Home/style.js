import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  

  img {
    width: 300px;
    height: 440px;
    border-radius: 15px;
    box-shadow: 0px 0px 15px #c2b4b4;
    

  }

  .foto {
    position: relative;
    
  }

  .name-age {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    height: 450px;
    width: 300px;
    border-radius: 15px;
    background-image: linear-gradient(#0000001c, #111010fd);

    div {
      color: white;
      display: flex;
      align-items: center;
    }
    p,
    h2 {
      margin: 10px;
    }
  }

  button {
    border-radius: 100%;
    border: 3px solid #e94d62;

    button:hover {
      background-color: #f5aa61;
      transform: scale(1.2);
    }
  }
  .botoes {
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin: 10px;
  }

  @media screen and (max-device-width: 400px) {
    .name-age,
    img {
      width: 80vw;
      height: 72vh;
    }

    button:hover {
      background-color: none;
      transform: scale(none);
    }
    button:active {
      background-color: #f5aa61;
    }
  }
`;
