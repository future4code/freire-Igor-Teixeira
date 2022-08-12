type Lista = {
    nome:string,
    preco:number,
    classificaçao:string,
    desconto:number

}

enum Epocas {
    VERAO = "verão",
    INVERNO = "inverno",
    INTIMA = "intima",
    BANHO = "banho"
 }
 



const roupas: Lista[] =[
    {nome:"camiseta", preco:55 , classificaçao:Epocas.VERAO, desconto:0},
    {nome:"jaqueta", preco:22 , classificaçao:Epocas.INVERNO, desconto:0},
    {nome:"moleton", preco:45 , classificaçao:Epocas.VERAO, desconto:0},
    {nome:"cueca", preco:22 , classificaçao:Epocas.INTIMA, desconto:0},
    {nome:"toalha", preco:66 , classificaçao:Epocas.BANHO, desconto:0},
]

const listaProdutos = () => {
         roupas.map((item)=>{
        if(item.classificaçao === Epocas.VERAO){
            return item.desconto = item.preco * 0.95
        }else if (item.classificaçao === Epocas.INVERNO){
            return item.desconto = item.preco * 0.90
        }else if(item.classificaçao === Epocas.INTIMA) {
            return item.desconto = item.preco * 0.96
        }else if(item.classificaçao === Epocas.BANHO){
            return item.desconto = item.preco * 0.93
        }
    })
    const novoArray = [...roupas] 
    console.table(novoArray)
}
listaProdutos()