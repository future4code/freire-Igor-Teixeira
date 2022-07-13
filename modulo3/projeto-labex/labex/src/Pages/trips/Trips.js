import React, { useEffect, useState } from "react";
import {goToAboutPage, goToHome } from "../../routes/Coordinator";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import {url_base} from "../../Constants/URL_BASE"
import { useResquestTrips } from "../../Components/hoocks/useRequestTrips";

export const Trips = () => {
    const navigate = useNavigate()
    const trips = useResquestTrips()
    // const [trips,setTrips] = useState([])

    // useEffect(()=>{
    //     getTrips()
    // },[])
    
    // const getTrips = () => {
    //     axios
    //     .get(`${url_base}/trips`)
    //     .then((res) => {setTrips(res.data.trips)})
    //     .catch((error)=> {alert(error)})
    // }

   const listTrips = trips.map((item) => {
    return (
    <li key={item.id}>
        <h3>{item.name}</h3>
        <p><strong>Descrição: </strong>{item.description}</p>
        <p><strong>Planeta: </strong>{item.planet}</p>
        <p><strong>Duração</strong>: {item.durationInDays} dias  <strong>Data</strong>: {item.date}</p>
        </li>)
   })

    return (
        <div>
            <h1>viajens</h1>
            <button onClick={()=>{goToHome(navigate)}}>back</button>
            <button onClick={()=>{goToAboutPage(navigate("/sing"))}}>SingUp</button>
           
            <ul>{listTrips}</ul>
           
        </div>
    )
}
