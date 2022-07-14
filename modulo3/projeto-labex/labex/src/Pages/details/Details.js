import React, { useEffect, useState } from "react";
import { url_base ,token} from "../../Constants/URL_BASE";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
import { useProtectPage } from "../../Components/hoocks/useProtectPage";
import { goBack } from "../../routes/Coordinator";

export const Details = () => {
  useProtectPage();
  const navigate = useNavigate()
  const [details, setDetails] = useState([]);
  const [candidate, setCandidate] = useState([]);
  const [aprovados, setAprovados] = useState([]);


  const pathParams = useParams();
  const id = pathParams.id;

  const getTripDetail = () => {
    axios
      .get(`${url_base}/trip/${id}`,token)
      .then((res) => {
        setDetails(res.data.trip);
        setCandidate(res.data.trip.candidates);
        setAprovados(res.data.trip.approved);
      })
      .catch((error) => {
        alert(error);
        console.log("deu erro ", error);
      });
  };

  const decideCandidate = (choise, candidateId) => {
    const body = {
      approve: choise,
    };
    axios
      .put(`${url_base}/trips/${id}/candidates/${candidateId}/decide`, body,token)
      .then((res) => {
        alert(`Candidato ${choise ? "Aprovado" : "Reprovado"} com sucesso`);
        getTripDetail();
      })
      .catch((error) => {
        alert(error.res, "erro");
      });
  };

  useEffect(() => {
    getTripDetail();
  }, []);

  const listCandidates = candidate.map((item) => {
    return (
      <li key={item.id}>
        <p>{item.name}</p>
        <p>{item.age}</p>
        <p>{item.applicationText}</p>
        <p>{item.profession}</p>
        <p>{item.country}</p>
        <button
          onClick={() => {
            decideCandidate(true, item.id);
          }}
        >
          apro
        </button>
        <button
          onClick={() => {
            decideCandidate(false, item.id);
          }}
        >
          repro
        </button>
      </li>
    );
  });

  const listAprovados = aprovados.map((aprov) => {
    return (
      <div key={aprov.id}>
        <li> {aprov.name}</li>
      </div>
    );
  });

  return (
    <div>
      <button onClick={()=>{goBack(navigate)}}>voltar</button>
      <div>
        <h1>detalhes</h1>
        <p>{details.name}</p>
        <p>{details.description}</p>
        <p>{details.planet}</p>
        <p>{details.durationInDays}</p>
        <p>{details.date}</p>
      </div>
      <h1>Candidatos</h1>
      <div>{listCandidates}</div>
      <h1>Aprovados</h1>
      {listAprovados}

      
    
      
    </div>
  );
};
