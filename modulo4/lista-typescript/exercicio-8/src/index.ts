//Escreva uma função que pergunta ao usuário a data de nascimento de uma pessoa (ex.: “24/04/1993”, e a data de emissão da sua carteira de identidade (ex.: “07/11/2015”). A função deve retornar um booleano que indica se a carteira precisa ser renovada ou não.

const validaIndentidade = (dataNascimento:string,dataEmissao:string) => {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear() 
    const anoNascimento = dataNascimento.split("/") 
    const anoEmissao = dataEmissao.split("/")
    const nascimento = parseInt(anoNascimento[2])
    const emissao= parseInt(anoEmissao[2])
    const idade = anoAtual - nascimento
    const prazo = anoAtual - emissao

    if(idade <= 20 && prazo >= 5){
        return true
    }else if (idade > 20 && idade <= 50 && prazo >= 10){
        return true
    }else if(idade > 50 && prazo > 15 ){
        return true 
    }else{
        return false
    }  
    
}



console.log(validaIndentidade("26/04/1993", "20/05/2005"))

