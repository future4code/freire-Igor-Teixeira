import styled from "styled-components";


const Button = styled.div`
  border-radius: 5px;
  padding: 8px 15px;
  color: #2b95e5;
  font-size: 1em;
  letter-spacing: 2px;
  font-family: "Roboto";
  cursor: pointer;
  display: inline-block;
  text-transform: uppercase;
 
&:hover {
  background-color: #2b95e5;
  color: #212121;
  box-shadow: 0 0 5px #2b95e5, 0 0 25px #2b95e5, 0 0 50px #2b95e5,
    0 0 200px #2b95e5;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #241c1cdd);
}

`




const MyButton = ({ children }) => {
    return (
      <Button >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {children}
      </Button >
    );
  };
  
  export default MyButton;
  