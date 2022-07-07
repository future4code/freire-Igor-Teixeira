import styled from "styled-components";

export const ContainerLoader = styled.div`

        background-color: white;
        position: absolute;
        border-radius: 10px;
        width: 400px;
        height: 520px;
        display: flex;
        align-items: center;

    .pulse {
        display: flex;
        height: 50px;

  animation: pulse 0.7s infinite ;
  margin: 0 auto;
  animation-direction: alternate;
  -webkit-animation-name: pulse;
  animation-name: pulse;
}

@-webkit-keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    -webkit-filter: brightness(100%);
  }
  100% {
    -webkit-transform: scale(1);
    -webkit-filter: brightness(200%);
  }
}

@keyframes pulse {
  0% {
    transform: scale(2);
    filter: brightness(100%);
  }
  100% {
    transform: scale(1.1);
    filter: brightness(200%);
  }
}

  
`;
