import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHome, goToLogin, goToTrips } from "../../routes/Coordinator";
import MyButton from "../myBotton/MyButton";
import { Container, Logo, ConLogo } from "./styled";
import logo1 from "../../Assets/logo2.png";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ConLogo
        onClick={() => {
          goToHome(navigate);
        }}
      >
        <Logo src={logo1} alt="" />
      </ConLogo>
      <div>
        <div
          onClick={() => {
            goToHome(navigate);
          }}
        >
          <MyButton>Home</MyButton>
        </div>
        <div
          onClick={() => {
            goToTrips(navigate);
          }}
        >
          <MyButton>Viagens</MyButton>
        </div>
        <div
          onClick={() => {
            goToLogin(navigate);
          }}
        >
          <MyButton>login</MyButton>
        </div>
      </div>
    </Container>
  );
};
