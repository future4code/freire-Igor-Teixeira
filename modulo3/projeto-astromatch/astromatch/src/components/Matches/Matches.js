import axios from "axios";
import React, { useState,useEffect } from "react";
import { Container } from "./style";
import {AiOutlineClear} from "react-icons/ai"

export const Matches = () => {
  const [matches, setMatches] = useState([]);

  // -------------- RENDERIZAÇÃO -----------------
  useEffect(() => {
    getMatches();
  }, []);

  // -------------------VER QUEM DEU MATCH ----------------
  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/igor/matches"
      )
      .then((res) => {
        setMatches(res.data.matches)
      })

      .catch((error) => {
        alert(error);
      });
  };
  //---------------------- Limpar match -----------------------------
  const clear = ()=>{
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/igor/clear")
    .then(()=>{
        getMatches()
    })
    .catch((error)=>{
        alert(error.response)
    })
  }



  const list = matches.map((item) => {
    return (
      <li>
        <img src={item.photo} alt={item.photo_alt} />
        <strong>
          <p>{item.name}</p>
        </strong>
      </li>
    );
  });

  return (
    <Container>
      <ul>{list.length >= 1 ? list : <h2>Você ainda não tem matches</h2>}</ul>
      <div className="botoes">
      <button onClick={clear}><AiOutlineClear fontSize="40px"/></button>
      </div>
    </Container>
  );
};
