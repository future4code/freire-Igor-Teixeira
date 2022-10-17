import React,{useContext} from "react";
import { Loader } from "../../components/Loader/Loader";
import { ContainerMain, ContainerNumbers,Sortition  } from "./styled";
import { GlobalStateContext } from "../../Global/GlobalStateContext";

export const MainBackground = (props) => {
  const {contest,setContest,loader} = useContext(GlobalStateContext)
  return (
    <ContainerMain>
        <ContainerNumbers>
        <div>
        <Sortition>{loader ? <Loader/> :<p>{!contest.numeros ? "00" : contest.numeros[0]}</p>}</Sortition>
        <Sortition>{loader ? <Loader/> :<p>{!contest.numeros ? "00" : contest.numeros[1]}</p>}</Sortition>
        <Sortition>{loader ? <Loader/> :<p>{!contest.numeros ? "00" : contest.numeros[2]}</p>}</Sortition>
        <Sortition>{loader ? <Loader/> :<p>{!contest.numeros ? "00" : contest.numeros[3]}</p>}</Sortition>
      </div>
      <div>
        <Sortition>{loader ? <Loader/> :<p>{!contest.numeros ? "00" : contest.numeros[4]}</p>}</Sortition>
        <Sortition>{loader ? <Loader/> :<p>{!contest.numeros ? "00" : contest.numeros[5]}</p>}</Sortition>
      </div>
      </ContainerNumbers>
    </ContainerMain>
  );
};
