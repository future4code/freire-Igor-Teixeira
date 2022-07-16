import React from "react";
import { Container,Img,CardImg, Logo } from "./styled";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {imgTrips} from '../../Constants/ImgTrips'
import {Background} from "../../Components/background/Background"
import logo1 from '../../Assets/logo1.png'

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

const listImg = imgTrips.map((img)=>{
  return (
    <CardImg key={img}><Img src={img} alt="d" /></CardImg>
    
  )

})

export const Home = () => {
  return (
    <Background>
    <Container>
      <Logo><img src={logo1} alt="imagem" /></Logo>
      <Carousel 
      responsive={responsive}
      itemClass="carousel-perso"
      >
      {listImg} 
      </Carousel>
    </Container>
    </Background>
  );
};
