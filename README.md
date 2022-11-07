# Blogs API

Projeto da [Trybe](https://www.betrybe.com/ "Trybe") - API para gestão de um blog feita em Node.js.

## Descrição

Foi desenvolvido uma API de um CRUD (Create, Read, Update e Delete) de um blog (users e posts), utilizando o ORM Sequelize para realizar buscas e inserção no banco de dados.

## Tecnologias

- Node.js
- Sequelize
- Express

## Execute o projeto

### Após clonar o projeto, instale as dependências:
`npm install`

------------

### Rodando com Docker:
Rode os serviços `node` e `db` com o comando:

`docker-compose up -d --build`

Crie o arquivo `.env `na raíz do projeto com a seguinte variável de ambiente:

    JWT_SECRET=mysecret

Popule o banco de dados com o comando:

`npm run prestart`

Inicie a aplicação com o comando:

`npm run dev`

------------

### Rodando sem Docker:
Certifique-se de que você tenha o `node` instalado e uma conexão com o banco de dados MySQL na sua máquina.

Configure um arquivo `.env` na raíz do projeto com as seguintes variáveis de ambiente:

            MYSQL_HOST=localhost
            MYSQL_PORT=3306
            MYSQL_USER=root
            MYSQL_PASSWORD=password
            JWT_SECRET=mysecret

Popule o banco de dados com o comando:

`npm run restore`

Inicie a aplicação com o comando:

`npm start`

------------

Agora você pode fazer uma requisição a qualquer rota da API.
