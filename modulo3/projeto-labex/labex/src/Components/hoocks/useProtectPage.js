import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useProtectPage = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem('token')

        if (token === null){
            alert("para acessar a pagina de adiministrador efetue login")
        }
    },[navigate])
}