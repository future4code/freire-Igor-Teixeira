import { UserAccount,Transaction,Bank } from "./types"


// exercicio 1 
//a) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?

//O constructor serve para inicializar as variáveis. É o primeiro método que é
//executado quando chamamos nossa classe. Caso não criemos um constructor ele é executado mesmo assim, porém vazio

// b) *Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*

const user1 = new UserAccount("000.000.000-00", "sonia", 20)
const user2 = new UserAccount("000.000.000-00", "maria", 30)

const transacao = new Transaction ("deposito", 200.00, "14/02/2022")
user1.setTransactions(transacao)

//c) Como conseguimos ter acesso às propriedades privadas de uma classe?

// Somente dentro da classe, ou pelos métodos getters (pegar infomações) ou setters (modificar).


const contas = new Bank([user1])
contas.setAccounts(user2)

console.log(contas)