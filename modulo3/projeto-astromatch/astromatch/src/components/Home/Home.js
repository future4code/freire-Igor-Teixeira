import React from "react";
import axios from "axios";
import { Container } from "./style"
import { useState,useEffect } from "react";

export const Home = () =>{
    const [pessoa, setPessoa] = useState([])

    //---------------------- RENDERIZAÇÃO --------------------
    useEffect(() => {
        getProfileToChoose()
    },[])

    // ----------------- VER NOVAS PESSOAS --------------------
    const getProfileToChoose = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/igor-rodrigues/person')
        .then((res) => {
            setPessoa(res.data.profile)
            console.log(pessoa)
        })
        .catch((error) => { console.log("error", error.response) })
    }

    return(
        <Container>
            
            
            <img src={pessoa.photo} alt={pessoa.photo_alt} />

            <div className="name-age">
                <h2>{pessoa.name}</h2>
                <p>{pessoa.age}</p>
            </div>

            <p>{pessoa.bio}</p>

            <div >
            <button>x</button>
            <button>s2</button>
            </div>
            
        </Container>
    )
}