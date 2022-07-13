import axios from "axios"
import { useState, useEffect } from "react"
import { url_base } from "../../Constants/URL_BASE"


export const useResquestTrips = () => {

    const [viagens, setViagens] = useState([])

    const getTrips = () => {
        axios.get(`${url_base}/trips`).then((res) => {
            setViagens(res.data.trips)
        }).catch((error) => {
            alert("Ah que pena, aconteceu um erro, por gentileza, tente mais tarde", error.response)
        })
    }

    useEffect(() => {
        getTrips()
    }, [])

    return viagens
}