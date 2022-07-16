import React from "react";
import {
  Container,
  Card,
  Title,
  Text,
  Botoes,
  ButtonInsc,
} from "./styled";
import { goToAboutPage, goToHome } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { useResquestTrips } from "../../Components/hoocks/useRequestTrips";
import { VscRocket } from "react-icons/vsc";
import { BiLogIn } from "react-icons/bi";
import { TbArrowBackUp } from "react-icons/tb";
import { Background } from "../../Components/background/Background";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Trips = () => {
  const navigate = useNavigate();
  const trips = useResquestTrips();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
        <ButtonInsc>
          <Text>
            <strong>Data</strong>: {item.date}{" "}
          </Text>
          <button
            className={"icon"}
            onClick={() => {
              goToAboutPage(navigate("sing"));
            }}
          >
            <VscRocket size="20px" color="white" />
          </button>
        </ButtonInsc>
      </Card>
    );
  });

  return (
    <Background>
      <Container>
        <h1>viagens</h1>
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
        <div className="BoxCarousel">
        <Carousel
          showDots={true}
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="CarouselPersonalizacao"
          focusOnSelect={true}
        >
          {listTrips}
        </Carousel>
        </div>
      </Container>
    </Background>
  );
};
