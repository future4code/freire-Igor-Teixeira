import React from "react";
import { Container, Form } from "./styled";
import { countries } from "../../Constants/Countries";
import { useForm } from "../../Components/hoocks/useForm";
import { url_base } from "../../Constants/URL_BASE";
import { useResquestTrips } from "../../Components/hoocks/useRequestTrips";
import { goBack } from "../../routes/Coordinator"
import { useNavigate } from "react-router";
import axios from "axios";
import { FormControl, TextField, Select, InputLabel } from "@material-ui/core";
import { Background } from "../../Components/background/Background";




export const SignUp = () => {

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
    <Background>
    <Container>

      <h1>Inscreva-se para viagem</h1>
      <Form onSubmit={applyToTrip} variant="outlined">
        
        <TextField
          id="outlined-basic"
          label="Nome"
          variant="outlined"

          value={form.name}
          onChange={onChange}
          name={"name"}
          required
          pattern={"^.{3,}"}
          title={"O nome deve ter no mínimo 3 letras"}
        />

        <TextField
          id="outlined-basic"
          label="Idade"
          variant="outlined"
          placeholder="idade"
          onChange={onChange}
          value={form.age}
          name={"age"}
          required
          min={18}
        />

        <TextField
          id="outlined-basic"
          label="Texto de inscrição"
          variant="outlined"

          cols="30"
          rows="2"
          onChange={onChange}
          name={"applicationText"}
          value={form.applicationText}
        ></TextField>

        <TextField
          id="outlined-basic"
          label="Profição"
          variant="outlined"

          type="text"
          placeholder="profição"
          onChange={onChange}
          value={form.profession}
          required
          name={"profession"}
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor='outlined-age-native-simple'>Paìs</InputLabel>
          <Select native
            id='outlined-age-native-simple'
            name={"country"}
            value={form.country}
            onChange={onChange}
            label="Pais"
            required

          >
            <option value={""} disabled></option>
            {countries.map((country) => {
              return <option value={country} key={country}>{country}</option>
            })}
          </Select >
          </FormControl>

          <FormControl variant="outlined">
          <InputLabel htmlFor='outlined-age-native-simple'>Viagens</InputLabel>
          <Select native
            id='outlined-age-native-simple'
            value={form.trip}
            onChange={onChange}
            name={"trip"}
            label="Viagens"
            required>

            <option value="" selected disabled></option>
            {mapOption}
          </Select >
        </FormControl>

        <button onClick={() => { goBack(navigate) }}>voltar</button>
        <button>enviar</button>
      </Form >
    </Container>
    </Background>
  );
};
