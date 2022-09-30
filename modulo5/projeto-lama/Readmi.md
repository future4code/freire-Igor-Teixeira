# Projeto LAMA Musical-Awards---API 🎸🎤

### Descrição

Suas principais funcionalidades são: Cadastrar usuario, criar um novo show, visualizar shows criados e se ainda a ingressos, reserva de ingressos e cancelamento.

### Como usar 

### Usuario 

* Cadastrar novo usuário: usar o endpoint signup e passe os parametros name, email, password, roles(via body) ele retornara token.

* Login: usar o endpoint login passar parametros email e password(via body) ele retonara token caso ja esteje cadastrado. 

### Shows

* Criar show: usar endpoint createShow, passar os parametros token, starts(data do show) e band retornara mensagem de sucesso.

* Pegar todos show: usar endpoint getpost esse endpoint e publico não precisa de parametros.

### Tickets

* criar ticket : usar endpoint createPost, passar parametros token(headers.Authorization) e showId(body)

*Delete tiquet : usar endpoint deletePost, passar parametros token(headers.Authorization) e id do show(path.params)

** Tecnologias utulizadas:

* Testes automatizados jest

* Typescript

* Node.js

* Dotenv

* Express

* Cors

* MySQL

* Knex

* UUID

* Jsonwebtoken

* Bcryptjs

### Documentação do Postaman

