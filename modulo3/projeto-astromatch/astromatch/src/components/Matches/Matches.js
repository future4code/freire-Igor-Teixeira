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
    console.log(matches)
    return (
      <li key={item.id}>
        <img src={item.photo} alt={item.photo_alt} />
        <strong>
          <p>{item.name}</p>
        </strong>
      </li>
    );
   
  });

  return (
    <Container>
      <ul>{matches.length > 0 ? <ul>{list}</ul> : <h2>Você não possui matches 	
        &#128577;</h2>}</ul>
      <div className="botoes">
      <button onClick={clear}><AiOutlineClear size="30px"/></button>
      </div>
    </Container>
  );
};
