import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../Components/hoocks/useForm";
import { token, url_base } from "../../Constants/URL_BASE";
import { goBack } from "../../routes/Coordinator";
import { Container, Form, Button } from "./styled";
import { planets } from "../../Constants/planets";
import { Background } from "../../Components/background/Background";
import { TextField, Select, FormControl, InputLabel } from "@material-ui/core";
export const CreatTrip = () => {
  const navigate = useNavigate();
  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  console.log(form.name);
  console.log(form.planet);
  console.log(form.description);
  console.log(form.durationInDays);
  console.log(form.date);

  const creatTrip = (event) => {
    event.preventDefault();
    axios
      .post(`${url_base}/trips`, form, token)
      .then((res) => {
        alert("viajem cadastrda com sucesso");
        console.log(res.data);
        cleanFields();
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };

  return (
    <Background>
      <Container>
        <h1>Criar viajem </h1>

        <Form onSubmit={creatTrip}>
          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            type="text"
            name={"name"}
            placeholder="Nome"
            onChange={onChange}
          />

          <TextField
            id="outlined-basic"
            label="Descrição"
            variant="outlined"
            cols="30"
            rows="3"
            name={"description"}
            onChange={onChange}
            placeholder="digite a descrição"
          ></TextField>

          <TextField
            id="outlined-basic"
            label="Duração"
            variant="outlined"
            type="text"
            name={"durationInDays"}
            placeholder="Duração em dias"
            onChange={onChange}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            type={"date"}
            name={"date"}
            value={form.date}
            onChange={onChange}
            required
          />

          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-age-native-simple"></InputLabel>
            <Select
              native
              id="outlined-age-native-simple"
              placeholder={"Planeta"}
              name={"planet"}
              defaultValue={""}
              onChange={onChange}
              required
            >
              <option value={""} disabled>
                Escolha um Planeta
              </option>
              {planets.map((planet) => {
                return (
                  <option value={planet} key={planet}>
                    {planet}
                  </option>
                );
              })}
            </Select>
          </FormControl>

          <Button>
            <button
              onClick={() => {
                goBack(navigate);
              }}
            >
              voltar
            </button>
            <button>criar</button>
          </Button>
        </Form>
      </Container>
    </Background>
  );
};
