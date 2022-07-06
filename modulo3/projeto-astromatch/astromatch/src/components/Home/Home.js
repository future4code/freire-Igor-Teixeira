import React from "react";
import axios from "axios";
import { Container } from "./style";
import { useState, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { VscClose } from "react-icons/vsc";

export const Home = () => {
  const [pessoa, setPessoa] = useState([]);

  //---------------------- RENDERIZAÇÃO --------------------
  useEffect(() => {
    getProfileToChoose();
  }, []);

  //---------------- VER NOVAS PESSOAS --------------------
  const getProfileToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/igor/person"
      )
      .then((res) => {
        setPessoa(res.data.profile);
        console.log(res.data.profile);
      })
      .catch((error) => {
        console.log("error", error.response);
      });
  };

  const ChoosePerson = () => {
    const body = { id: pessoa.id, choice: true };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/igor/choose-person",
        body
      )
      .then(() => {
        getProfileToChoose();
      })
      .catch((error) => {
        alert(error.response);
      });
  };

  return (
    <Container>
      <div className="foto">
        <img src={pessoa.photo} alt={pessoa.photo_alt} />
      </div>

      <div className="name-age">
        <div>
          <h2>{pessoa.name},</h2>
          <strong>
            <p>{pessoa.age}</p>
          </strong>
        </div>
        <div>
          <p>{pessoa.bio}</p>
        </div>
      </div>
      <div className="botoes">
        <button
          onClick={() => {
            ChoosePerson(false);
          }}
        >
          <VscClose fontSize="44px" color="red" />
        </button>
        <button
          onClick={() => {
            ChoosePerson(true);
          }}
        >
          <FcLike fontSize="44px" color="red" />
        </button>
      </div>
    </Container>
  );
};
