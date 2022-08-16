//exercicio 2 

export type Todos = {
    userId:number
    id:number
    title:string
    completed:boolean
}

//exercicio 3

export const Afazeres : Todos[] = [
    {
        userId:1,
        id:1,
        title:"preparar cafe da manha",
        completed:true
    },
    {
        userId:1,
        id:2,
        title:"organizar agenda do trabalho",
        completed:false
    },
    {
        userId:1,
        id:3,
        title:"mandar mensagens para clientes",
        completed:false
    },
    {
        userId:1,
        id:4,
        title:"ir para academia ",
        completed:false
    },
    {
        userId:1,
        id:5,
        title:"buscar filho na escola",
        completed:true
    },
    {
        userId:2,
        id:1,
        title:"pegar avião 12:00",
        completed:true
    },
    {
        userId:2,
        id:2,
        title:"ligar para operadora",
        completed:true
    },


    
]
