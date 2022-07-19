import React, { useEffect, useState } from "react";
import { url_base, token } from "../../Constants/URL_BASE";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useProtectPage } from "../../Components/hoocks/useProtectPage";
import { goBack } from "../../routes/Coordinator";
import { TbArrowBackUp } from "react-icons/tb";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

import { Container, Card, Aprov } from "./style";

export const Details = () => {
  useProtectPage();
  const navigate = useNavigate();
  const [details, setDetails] = useState([]);
  const [candidate, setCandidate] = useState([]);
  const [aprovados, setAprovados] = useState([]);

  const pathParams = useParams();
  const id = pathParams.id;

  const getTripDetail = () => {
    axios
      .get(`${url_base}/trip/${id}`, token)
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
      .put(
        `${url_base}/trips/${id}/candidates/${candidateId}/decide`,
        body,
        token
      )
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
        <Aprov>
          <button
            onClick={() => {
              decideCandidate(true, item.id);
            }}
          >
            <AiOutlineLike size="25px" color="green" />
          </button>
          <button
            onClick={() => {
              decideCandidate(false, item.id);
            }}
          >
            <AiOutlineDislike size="25px" color="red" />
          </button>
        </Aprov>
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
    <Container>
      <button
        onClick={() => {
          goBack(navigate);
        }}
      >
        voltar <TbArrowBackUp />{" "}
      </button>
      <Card>
        <h2>Detalhes</h2>
        <p>Nome: {details.name}</p>
        <p>Descrição: {details.description}</p>
        <p>Planeta: {details.planet}</p>
        <p>Duração: {details.durationInDays}</p>
        <p>Data: {details.date}</p>
      </Card>

      <Card>
        <h2>Candidatos</h2>
        {listCandidates}
      </Card>

      <Card>
        <h2>Aprovados</h2>
        {listAprovados}
      </Card>
    </Container>
  );
};
