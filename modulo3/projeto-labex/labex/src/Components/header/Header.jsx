import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHome, goToLogin, goToTrips } from "../../routes/Coordinator";
import MyButton from "../myBotton/MyButton";
import { Container } from "./styled";
import {AiOutlineHome} from 'react-icons/ai'
import {TbRocket} from 'react-icons/tb'
import {BsGear} from 'react-icons/bs'

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div
        onClick={() => {
          goToHome(navigate);
        }}
      >
        <MyButton>Home <AiOutlineHome/></MyButton>
      </div>
      <div
        onClick={() => {
          goToTrips(navigate);
        }}
      >
        <MyButton>Viagens <TbRocket/></MyButton>
      </div>
      <div
        onClick={() => {
          goToLogin(navigate);
        }}
      >
        <MyButton>login <BsGear/> </MyButton>
      </div>
    </Container>
  );
};
