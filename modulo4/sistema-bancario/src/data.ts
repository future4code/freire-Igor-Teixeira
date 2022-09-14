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
  export type NewUser = {
    id:number
    name:string
    cpf:string
    birthDate:string
    balance:number,
    extract:MovementData[]
  }

 export let userAccount:NewUser[] = [
    {
      id:65,
      name: "igor",
      cpf: "236-845-826.66",
      birthDate:"26/04/1993",
      balance:2000,
      extract:[
            {   
                id:"656",
                value:65,
                date:"25/08/22",
                description:"padaria",
                movement:MOVEMENT.SPENDING
            }
          ]
      },
      {
    id:55,
    name: "Carlos",
    cpf: "236-965-856.66",
    birthDate:"26/04/1987",
    balance:500,
    extract:[
            {   
                id:"5648",
                value:63,
                date:"10/08/22",
                description:"mercado",
                movement:MOVEMENT.SPENDING
            },
            {   
              id:"5644656",
              value:200,
              date:"12/08/22",
              description:"luz",
              movement:MOVEMENT.SPENDING
          },
          {   
            id:"5648",
            value:300,
            date:"10/08/22",
            description:"mercado",
            movement:MOVEMENT.DEPOSIT
        }
        ]
        }   
  ]