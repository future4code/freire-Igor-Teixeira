import React from "react";
import { Container, Form } from "./styled";
import { countries } from "../../Constants/Countries";
import { useForm } from "../../Components/hoocks/useForm";
import { url_base } from "../../Constants/URL_BASE";
import { axios } from "axios";
import { useResquestTrips } from "../../Components/hoocks/useRequestTrips";
import {goBack,goToTrips} from "../../routes/Coordinator"
import { useNavigate } from "react-router";


export const SingUp = () => {
  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    description: "",
    profession: "",
    country: "",
    trip: "",
  });

  const trips = useResquestTrips()
  const navigate = useNavigate()

  const applyToTrip = (event) => {
    event.preventDefault();
    axios
      .post(`${url_base}/trips/${form.trip}/apply`, form)
      .then((res) => {
        alert("Solicitação enviada com sucesso!");
        cleanFields();
      })
      .catch((error) => {
        alert(
          "Solicitação não enviada, por gentileza, verificar todos os campos e tentar novamente",
          error.response
        );
      });
  };
 
  return (
    <Container>
      
      <Form onSubmit={applyToTrip}>
        <h1>inscreva-se para viajem</h1>
        <input
          placeholder={"Nome"}
          value={form.name}
          onChange={onChange}
          name={"name"}
          required
          pattern={"^.{3,}"}
          title={"O nome deve ter no mínimo 3 letras"}
        />

        <input
          placeholder="idade"
          onChange={onChange}
          value={form.age}
          name={"age"}
          required
          min={18}
        />

        <textarea
          id=""
          cols="30"
          rows="2"
          placeholder="Por que deseja ir a viajem"
          onChange={onChange}
          name={"description"}
          value={form.description}
        ></textarea>

        <input
          type="text"
          placeholder="profição"
          onChange={onChange}
          value={form.profession}
          required
          name={"profession"}
        />

        <select name="country" id="" placeholder="pais">
          <option value={""} selected disabled>
            Escolha um País
          </option>
          {countries.map((country) => {
            return (
              <option value={country} key={country}>
                {country}
              </option>
            );
          })}
        </select>

        <select
          name={"trip"}
          placeholder="escolha uma viajem "
          value={form.trip}
          onChange={onChange}
          required
        >
          <option value="" selected disabled>
            escolha uma viagem
          </option>
          {trips.map((trips) => {
            return (
              <option value={trips} key={trips}>
                {trips.name}
              </option>
            );
          })}
          
        </select>

        <button onClick={()=>{goBack(navigate)}}>voltar</button>
        <button onClick={()=>{goToTrips(navigate)}}>enviar</button>
      </Form>
    </Container>
  );
};
