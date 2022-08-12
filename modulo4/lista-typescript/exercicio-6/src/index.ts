
type Contas = {
    cliente:string
    saldoTotal:number
    debitos:number[]
}

const dadosCliente = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const saldoCliente = (lista:Contas[]):object[] => {
     return lista.filter((item)=>{
        const total = item.debitos.reduce(function(contador, numero){
            console.log(contador)
              return contador + numero;
              
            }, 0);
            const novo = item.saldoTotal - total
        if(novo < 0){
            item.saldoTotal = novo
            item.debitos = []
            return item
        }
          
    })
    
}

console.log(saldoCliente(dadosCliente))