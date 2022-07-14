import axios from "axios";
import React,{useEffect} from "react";
import { useResquestTrips } from "../../Components/hoocks/useRequestTrips";
import {useNavigate} from "react-router-dom"
import { url_base,token } from "../../Constants/URL_BASE";
import { goBack, goToAboutPage,goToHome } from "../../routes/Coordinator";
import { useProtectPage } from "../../Components/hoocks/useProtectPage";



export const PageAdm = () => {
    useProtectPage()
        const trips = useResquestTrips()
        const navigate = useNavigate() 
        useEffect(() => {
            
        }, [trips])

    const deleteTrip = (id) => {
        if(window.confirm("deseja realmente apagar ?")){
        axios.delete(`${url_base}/trips/${id}`,token)
        .then((res) => {
            console.log("apagado",res.data)
            alert("apagado")
        })
        .catch((error) => { 
            console.log("Erro",error.res)
            alert(error)
        })
    }
    }

     const listTrips = trips.map((item)=>{
        return(
            <li key={item.id}>
                <h2 onClick={()=>{goToAboutPage(navigate(`/details/${item.id}`))}}>{item.name}</h2>
                <button onClick={()=>{deleteTrip(item.id)}}>apagar</button>
                </li>
        )
     })

    return (
        <div>
           <button onClick={()=>{goBack(navigate)}}>voltar</button>
           <button onClick={()=>{goToAboutPage(navigate("create"))}}>criar viagem</button >
           <button>logout</button>
            <h1>Adm pag</h1>
            {listTrips}
        </div>
    )
}