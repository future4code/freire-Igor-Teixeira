//------------Exercícios de interpretação de código--------------------

// exercicio 1 


/* const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  }) 
  */

  //{ nome: "Amanda Rangel", apelido: "Mandi" },
  //{ nome: "Laís Petra", apelido: "Laura" },
  //{ nome: "Letícia Chijo", apelido: "Chijo" }

  //exercicio 2 -------------------------------------

/* 
  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB) 
   */

  //[ Amanda Rangel', 'Laís Petra', 'Letícia Chijo' ]


 // exercicio 3


/*  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)  */
  

  //{ nome: "Amanda Rangel", apelido: "Mandi" },
  //{ nome: "Laís Petra", apelido: "Laura" },


 //--------------Exercícios de escrita de código----------------------
 

 // exercicio 1
 
 const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//a)
 const novoArray = pets.map((item) => {
    return item.nome
 }) 
 console.log(novoArray)

//b)

const petSalsicha = pets.filter((item) => {
     return item.raca === "Salsicha"
     
 })

console.log(petSalsicha)


//c)

const petPoodles = pets.filter((item)=>{
    return item.raca === "Poodle"    
})


console.log(petPoodles)
let mensagem = petPoodles.map((item) =>{
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.raca}`)
})

// exercicio 2 ------------------------------------------------------

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
//a)
 const nomeProdutos = produtos.map((item) => {
     return item.nome
 })
console.log(nomeProdutos)
 //b)
const descontoProdutos = produtos.map((item)=>{
    return `${item.nome} = valor :${item.preco*0.95}`
})
console.log(descontoProdutos)
//c)
const bebidas = produtos.filter((item)=>{
    return item.categoria === "Bebidas"
})

console.log(bebidas)

//d)
const nomeYpe =  produtos.filter((item)=>{
    return item.nome.includes("Ypê")
     

})
console.log(nomeYpe)

const propaganda = nomeYpe.map((item)=>{
    console.log(`Compre ${item.nome} por R$ ${item.preco}`)
})


//Desafiooo -----------------------------------------------

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

//a)

const nomePokemon = pokemons.map((item,) =>{
    return item.nome
})
console.log(nomePokemon.sort())

//b)

const tipoPokemom = pokemons.map((item) =>{
    return item.tipo
})

const semRepeticao = tipoPokemom.filter((item, index) => {
    return tipoPokemom.indexOf(item) === index
})

console.log(semRepeticao)