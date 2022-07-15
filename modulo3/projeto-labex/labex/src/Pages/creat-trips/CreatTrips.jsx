import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom"
import { useForm } from "../../Components/hoocks/useForm";
import { token, url_base } from "../../Constants/URL_BASE";
import { goBack } from "../../routes/Coordinator"
import { Container, Form } from "./styled"
import { planets } from "../../Constants/planets"

export const CreatTrip = () => {
    const navigate = useNavigate()
    const { form, onChange, cleanFields } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: "",
    })

    console.log(form.name)
    console.log(form.planet)
    console.log(form.description)
    console.log(form.durationInDays)
    console.log(form.date)

    const creatTrip = (event) => {
        event.preventDefault()
        axios.post(`${url_base}/trips`, form, token)
            .then((res) => {
                alert("viajem cadastrda com sucesso")
                console.log(res.data)
                cleanFields()
            })
            .catch((error) => {
                alert(error)
                console.log(error)
            })
    }



    return (
        <Container>
            <h1>criar viajem </h1>
            <Form onSubmit={creatTrip}>

                <input
                    type="text"
                    name={"name"}
                    placeholder="Nome"
                    onChange={onChange}
                />

                <select
                    placeholder={"Planeta"}
                    name={"planet"}
                    defaultValue={""}
                    onChange={onChange}
                    required
                >
                    <option value={""} disabled>Escolha um Planeta</option>
                    {planets.map((planet) => {
                        return <option value={planet} key={planet}>{planet}</option>
                    })}
                </select>


                <input
                    placeholder={"Data"}
                    type={"date"}
                    name={"date"}
                    value={form.date}
                    onChange={onChange}
                    required

                />

                <textarea cols="30" rows="10"
                    name={"description"}
                    onChange={onChange}
                    placeholder="digite a descrição"></textarea>

                <input
                    type="text"
                    name={"durationInDays"}
                    placeholder="Duração em dias"
                    onChange={onChange}
                />



                <button>criar</button>
            </Form>
            <button onClick={() => { goBack(navigate) }}>voltar</button>
        </Container>
    )
}