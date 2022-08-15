type Pratos = {
    nome:string,
    custo:number,
    valorVenda:number,
    ingredientes:string[],
    
}

let produtos: Pratos[] = [
    {nome:"sachimi" ,custo:15, valorVenda:30, ingredientes:["salmão"]},
    {nome:"topCrispy" ,custo:16, valorVenda:40, ingredientes:["salmão","alho poró"]},
    {nome:"yakisoba" ,custo:10, valorVenda:32, ingredientes:["macarão","molho","legumes"]},
]
//A ------------  add produto ----------------------
const addProdutos = (nome:string,custo:number,valorVenda:number,ingredientes:string[]) => {
   produtos = [...produtos,
    {nome:nome,
    custo:custo,
    valorVenda:valorVenda,
    ingredientes:ingredientes}]
    
    console.table(produtos)
}

addProdutos('teste',66,66,['teste'])
//B----------------------valor dos produtos ---------------------------------
const valorProduto = (nome:string) =>{
    produtos.map((item)=>{
        if(item.nome === nome){
            return console.log(item.nome,"R$",item.valorVenda,",00")
        }else if (!item.nome){
            return console.log("produto indisponivel")
        }
    })
}

valorProduto("yakisoba")
// C --------------------- armazena vendas ------------------------------------
let vendas:string[] = []

const vendeProduto = (nome:string) =>{
    produtos.map((item)=>{
        if(item.nome === nome){
            vendas.push(item.nome,) 
            
        }
    })
    console.log(vendas)

}

vendeProduto("topCrispy")

// ---------------  lucro restaurante ----------------
const lucro  = () =>{
    produtos.map((item)=>{
       if(vendas[0] === item.nome){
        return console.log(`prato ${item.nome} custou ${item.custo} seu lucro R$${item.valorVenda - item.custo},00 `)
       }

    })
   
    
}

lucro()
