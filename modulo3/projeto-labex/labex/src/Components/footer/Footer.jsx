import React from "react";
import { Container } from "./styled";
import { MdEmail } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export const Footer = () => {
  return (
    <Container>
      <p>Direitos reservados Copyright©</p>
      <p>
        <a
          href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D"
          target={"_blanck"}
        >
          <BsTwitter color="white" />
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox" target={"_blanck"}>
          <MdEmail color="white" />
        </a>
        <a href="https://www.instagram.com/" target={"_blanck"}>
          <AiFillInstagram color="white" />
        </a>
      </p>
    </Container>
  );
};
