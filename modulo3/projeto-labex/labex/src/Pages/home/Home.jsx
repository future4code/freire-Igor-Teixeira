import React from "react";
import { Container, Img, CardImg, Logo, Who } from "./styled";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { imgTrips } from "../../Constants/ImgTrips";
import { Background } from "../../Components/background/Background";
import logo1 from "../../Assets/logo1.png";
import { goToAboutPage } from "../../routes/Coordinator";
import { Navigate, useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa";

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

const listImg = imgTrips.map((item) => {
  return (
    <CardImg key={item.img}>
      <Img src={item.img} alt="fotos do espaço" />
      <p>{item.frase}</p>
    </CardImg>
  );
});

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Background>
      <Container>
        <Logo>
          <img src={logo1} alt="imagem" />
          <div>
            <Who
              onClick={() => {
                goToAboutPage(navigate("/whoweare"));
              }}
            >
              Quem Somos ?<FaUsers />
            </Who>
          </div>
        </Logo>
        <Carousel
          responsive={responsive}
          itemClass="carousel-perso"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {listImg}
        </Carousel>
      </Container>
    </Background>
  );
};
