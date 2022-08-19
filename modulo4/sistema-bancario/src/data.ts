type MovementData = {
    id?:string
    value:number
    date:string
    description:string
    movement:MOVEMENT
  }

  export enum MOVEMENT {
      DEPOSIT="DEPOSIT",
      SPENDING="SPEN"

  }
  
  type Extract ={
    balance:number
    spen:MovementData[]
  }
  export type NewUser = {
    id:number
    name:string
    cpf:string
    birthDate:string
  }
  
  type Account = {
    user:NewUser
    extract:Extract[]
  }
  
 export let userAccount:Account[] = [
    {
      user:{
      id:65,
      name: "igor",
      cpf: "236-845-826.66",
      birthDate:"26/04/1993",
    },
    extract:[
        {
        balance:2000,
        spen:[
            {   
                id:"656",
                value:65,
                date:"25/08/22",
                description:"padaria",
                movement:MOVEMENT.SPENDING
            }
        ]
        }   
    ]
  },
  {
    user:{
    id:55,
    name: "Carlos",
    cpf: "236-965-856.66",
    birthDate:"26/04/1987",
  },
    extract:[
        {
        balance:500,
        spen:[
            {   
                id:"5648",
                value:63,
                date:"25/08/22",
                description:"mercado",
                movement:MOVEMENT.SPENDING
            }
        ]
        }   
    ]
          
}
  ]