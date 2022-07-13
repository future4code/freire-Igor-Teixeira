import React from "react";
import {useNavigate} from "react-router-dom"
import {goBack} from "../../routes/Coordinator"

export const CreatTrip = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>criar viajem </h1>
            <button onClick={goBack(navigate)}>voltar</button>
            <button>criar</button>
        </div>
    )
}