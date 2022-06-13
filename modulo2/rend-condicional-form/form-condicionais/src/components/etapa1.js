import React from "react";
import 

const Container = `
    ma
`

class Etapa1 extends React.Component{
    render(){

    return(
        <div>
        <p>1 - Qual o seu nome? </p>
        <input type="text"  />
        <p>2 - Qual sua idade?</p>
        <input type="text"  />
        <p>3 - Qual seu email?</p>
        <input type="text"  />
        <p>Qual a sua escolaridade ?</p>
        <select name="escolaridade">
            <option value="">Ensino médio incompleto</option>
            <option value="">Ensino médio completo</option>
            <option value="">Ensino superior Incompleto</option>
            <option value="">Ensino superior completo</option>
        </select>
        
        </div>
    )
    }   
}
export default Etapa1