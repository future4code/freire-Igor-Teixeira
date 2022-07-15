import React from "react";
import { Container, Form } from "./styled";
import { countries } from "../../Constants/Countries";
import { useForm } from "../../Components/hoocks/useForm";
import { url_base } from "../../Constants/URL_BASE";
import { useResquestTrips } from "../../Components/hoocks/useRequestTrips";
import { goBack } from "../../routes/Coordinator"
import { useNavigate } from "react-router";
import axios from "axios";




export const SingUp = () => {

  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    trip: "",
  });

  const trips = useResquestTrips()
  const navigate = useNavigate()

  const applyToTrip = (event) => {
    axios.post(`${url_base}/trips/${form.trip}/apply`, form).then((res) => {
          alert("Solicitação enviada com sucesso!")
          cleanFields()
          navigate(navigate - 1)
        }).catch((error) => {
          alert("Solicitação não enviada, por gentileza, verificar todos os campos e tentar novamente", error.response)
        })
      }

  const mapOption = trips.map((trip) => {
    return (
      <option key={trip.id} value={trip.id}>
        {trip.name}
      </option>
    )
  })

  return (
    <Container>
      

      <Form onSubmit={applyToTrip} >
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
          name={"applicationText"}
          value={form.applicationText}
        ></textarea>

        <input
          type="text"
          placeholder="profição"
          onChange={onChange}
          value={form.profession}
          required
          name={"profession"}
        />

        <select
          placeholder={"País"}
          name={"country"}
          value={form.country}
          onChange={onChange}
          required
        >
          <option value={""} disabled>Escolha um País</option>
          {countries.map((country) => {
            return <option value={country} key={country}>{country}</option>
          })}
        </select>


        <select value={form.trip}
          onChange={onChange}
          name={"trip"}
          required>
          <option value="" selected disabled>Escolha uma Viagem</option>
          {mapOption}
        </select>

        <button onClick={() => { goBack(navigate) }}>voltar</button>
        <button></button>
      </Form>
    </Container>
  );
};
