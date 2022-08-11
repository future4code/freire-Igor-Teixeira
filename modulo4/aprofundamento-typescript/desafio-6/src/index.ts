enum Epocas {
   PREHISTORIA = "Pré-historia",
   IDADEANTIGA = "Idade Antiga",
   IDADEMEDIA = "Idade Media",
   IDADEMODERNA = "Idade Moderna",
   IDADECONTEMPORANEA = "Idade Contemporanea"
}


const idadeHistorica = (ano:number ,siglaEpoca?:string ) => {
    const sigla:string = siglaEpoca.toUpperCase()
    if(ano === 100.000 && sigla === "AC"){
        return Epocas.PREHISTORIA
    }else if(ano === 4000 && sigla === "AC"){
        return Epocas.IDADEANTIGA
    }else if (ano === 476 && sigla === "DC" ){
        return Epocas.IDADEMEDIA
    }else if(ano === 1453 && sigla === "DC" ) {
        return Epocas.IDADEMODERNA
    }else if(ano === 1789 && sigla === "DC" ){
        return Epocas.IDADECONTEMPORANEA
    }else{
        console.log("Digite uma data valida")
    }
    
}
console.log(idadeHistorica(1453))