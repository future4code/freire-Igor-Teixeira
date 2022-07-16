import React from "react";
import { Container, Card, Title, Text, ContCard, Botoes } from "./styled";
import { goToAboutPage, goToHome } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { useResquestTrips } from "../../Components/hoocks/useRequestTrips";
import { VscRocket } from "react-icons/vsc";
import { BiLogIn } from "react-icons/bi";
import { TbArrowBackUp } from "react-icons/tb";
import { Background } from "../../Components/background/Background";

export const Trips = () => {
  const navigate = useNavigate();
  const trips = useResquestTrips();

  const listTrips = trips.map((item) => {
    return (
      <Card key={item.id}>
        <Title>
          {item.name} <VscRocket />{" "}
        </Title>
        <Text>
          <strong>Descrição: </strong>
          {item.description}
        </Text>
        <Text>
          <strong>Planeta: </strong>
          {item.planet}
        </Text>
        <Text>
          <strong>Duração</strong>: {item.durationInDays} dias{" "}
        </Text>
        <Text>
          <strong>Data</strong>: {item.date}
        </Text>
      </Card>
    );
  });

  return (
    <Background>
      <Container>
        <h1>viajens</h1>
        <Botoes>
          <button
            onClick={() => {
              goToHome(navigate);
            }}
          >
            Voltar
            <TbArrowBackUp />
          </button>
          <button
            onClick={() => {
              goToAboutPage(navigate("sing"));
            }}
          >
            Inscrever-se
            <BiLogIn />{" "}
          </button>
        </Botoes>

        <ContCard>{listTrips}</ContCard>
      </Container>
    </Background>
  );
};
