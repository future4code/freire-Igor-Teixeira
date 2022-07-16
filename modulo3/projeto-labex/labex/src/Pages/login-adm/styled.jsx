import styled from "styled-components";

export const Container =styled.div`
    color: white;
    
    animation: gradient 15s ease infinite;
    background: linear-gradient(-45deg, #011523, #062a45, #042c4a, #2b95e5) no-repeat;
    background-size: 300% 300%;
    height: 92vh;
    
    text-align: center;

@keyframes gradient {
    0% {
        background-position: 0 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0 50%;
    }
}

form{
    display: flex;
    gap:10px;
}



`