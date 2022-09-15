# Projeto Cokenu 👩🏻‍🍳 
### Descrição
API para um aplicativo de receitas
Principais funcionalidades: cadastrar/visualizar informações de usuários e receitas. Excluir usuários e receitas, e redefinir senha de um usuários.
Como usar
Cadastrar novo usuário: usar o endpoint createUser. Passanod via body as seguintes informações: name, email, password, e role. Para role temos duas opções: ADMIN ou NORMAL.

### Usuario
* Login: usar o endpoint login.
* Feed: usar o endpoint feed. 
* Pegar informações do próprio usuário: usar o endpoint getUserProfile.
* Pegar informações de outro usuário: usar o enpoint getProfileById.
* Deletar contas: usar o endpoint deleteAccount.
### Receitas
* Pegar uma receita: usar o enpoint getRecipe.
* Criar receitas: usar o endpoint createRecipe. 
* Editar receitas: usar o endpoint updateRecipe. 
*Deletar receitas: usar o endpoint deleteRecipe. 
### Seguidores
* Seguir outro usuário: usar o enpoint follwerUser. 
* Deixar de seguir um usuário: usar o enpoint unfollowerUser.

Consultar a documentação no Postman, pois nela, tem exemplos de como usar cada enpoint.

link postman = https://documenter.getpostman.com/view/21555253/2s7YfLibZM

link heroku = https://cokenu-backend.herokuapp.com/

## Tecnologias utulizadas:
- Typescript POO
- Node.js
- Dotenv
- Express
- MySQL
- Knex
- UUID
- Jsonwebtoken
- Bcryptjs