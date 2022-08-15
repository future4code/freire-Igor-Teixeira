enum Epocas {
   PREHISTORIA = "Pré-historia",
   IDADEANTIGA = "Idade Antiga",
   IDADEMEDIA = "Idade Media",
   IDADEMODERNA = "Idade Moderna",
   IDADECONTEMPORANEA = "Idade Contemporanea"
}




const idadeHistorica = (ano:number ,siglaEpoca?:string) => {
    const sigla:string = siglaEpoca?.toUpperCase()
    if(ano < 4000  && sigla === "AC"){
        return Epocas.PREHISTORIA
    }else if(ano > 4000 && sigla === "AC"){
        return Epocas.IDADEANTIGA
    }else if (ano >= 476 && ano < 1453  && sigla === "DC" || ano >= 476 && ano < 1453  && sigla === undefined){
        return Epocas.IDADEMEDIA
    }else if(ano >= 1453 && ano < 1789 && sigla === "DC" || ano >= 1453 && ano < 1789 && sigla === undefined) {
        return Epocas.IDADEMODERNA
    }else if( ano >= 1789 && sigla === "DC" || ano >= 1789 && sigla === undefined ){
        return Epocas.IDADECONTEMPORANEA
    }else{
        console.log("Digite uma data valida")
    }
    
}
console.log(idadeHistorica(2000,"Ac"))