import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 30px;
    
    input{
        width:300px;
    }
    select{
        width:280px;
    }
`

export const Form = styled.form`
    display:flex;
    flex-direction: column;
    gap: 10px;
    margin :30px;
`

export const Button = styled.div`
    display:flex;
    width: 300px;
    justify-content: space-between;
    
`