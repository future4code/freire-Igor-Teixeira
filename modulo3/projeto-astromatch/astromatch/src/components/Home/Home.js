import React from "react";
import axios from "axios";
import { Container } from "./style";
import { useState, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { VscClose } from "react-icons/vsc";
import Swal from "sweetalert2";
import { Loader } from "../loader/Loader";


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
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/igorr/person"
      )
      .then((res) => {
        setPessoa(res.data.profile );
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
            Swal.fire({
              title: 'Match!!',
              text: `Você deu match com ${pessoa.name} .`,
              imageUrl: `${pessoa.photo}`,
              imageWidth: 200,
              imageHeight: 200,
              imageAlt: `${pessoa.photo_alt}`,
              confirmButtonColor: " #e35a76",
              confirmButtonText:"&#9829"

            })
          }}
        >
          <FcLike fontSize="44px" color="red" />
        </button>
      </div>
      {/* <Loader/> */}
    </Container>
  );
};
