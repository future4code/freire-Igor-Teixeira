import {useRequestData} from "../../hooks/UseRequestData"


const loterias = useRequestData([],"https://brainn-api-loterias.herokuapp.com/api/v1/loterias")

console.log(loterias.data)

export const HomePage = () =>{
    return(
        <div>oii</div>
    )
}