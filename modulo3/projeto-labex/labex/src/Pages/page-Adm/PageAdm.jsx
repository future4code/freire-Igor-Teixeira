import axios from "axios";
import React, { useEffect } from "react";
import { useResquestTrips } from "../../Components/hoocks/useRequestTrips";
import { useNavigate } from "react-router-dom";
import { url_base, token } from "../../Constants/URL_BASE";
import { goBack, goToAboutPage } from "../../routes/Coordinator";
import { useProtectPage } from "../../Components/hoocks/useProtectPage";
import { Background } from "../../Components/background/Background";
import { Card, Container, Botao } from "./styled";
import { BsTrash } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { BiAddToQueue } from "react-icons/bi";
import { TbArrowBackUp } from "react-icons/tb";

export const PageAdm = () => {
  useProtectPage();
  const trips = useResquestTrips();
  const navigate = useNavigate();
  useEffect(() => {}, [trips]);

  const deleteTrip = (id) => {
    if (window.confirm("Deseja realmente apagar ?")) {
      axios
        .delete(`${url_base}/trips/${id}`, token)
        .then((res) => {
          alert("Deletado com sucesso");
        })
        .catch((error) => {
          alert(error, "Tivemos algum problema tente mais tarde.");
        });
    }
  };
  const clear = () => {
    localStorage.clear();
    navigate("/login");
  };

  const listTrips = trips.map((item) => {
    return (
      <Card key={item.id}>
        <h2
          onClick={() => {
            goToAboutPage(navigate(`/details/${item.id}`));
          }}
        >
          {item.name}
        </h2>
        <button
          onClick={() => {
            deleteTrip(item.id);
          }}
        >
          <BsTrash size="20px" color="white" />
        </button>
      </Card>
    );
  });

  return (
    <Background>
      <Container>
        <h1>Painel Administrador </h1>
        <Botao>
          <button
            onClick={() => {
              goBack(navigate);
            }}
          >
            voltar
            <TbArrowBackUp />
          </button>
          <button
            onClick={() => {
              goToAboutPage(navigate("create"));
            }}
          >
            criar viagem <BiAddToQueue />
          </button>
          <button onClick={clear}>
            logout <BiLogOut />
          </button>
        </Botao>

        {listTrips}
      </Container>
    </Background>
  );
};
