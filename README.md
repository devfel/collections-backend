<p align="center">
  <a href="https://devfel.com/" rel="noopener">
 <img  src="https://devfel.com/imgs/devfel-logo-01.JPG" alt="DevFel"></a>
</p>

<h1 align="center">Games Collection - Backend</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center">

This application implements database search queries using 3 different methods, ORM, QueryBuilder and Raw Queryes with the typeorm. Users have game lists they own, and different find methods are implemented. <br/><br/>
This project was done using Typescript, Node, Express, Postgres and it utilizes from the SOLID principles. </p>

---

## 📝 Table of Contents

- [Application Features](#features)
- [Dependencies](#dependencies)
- [Built Using](#built_using)
- [Getting Started](#getting_started)
- [Acknowledgements](#acknowledgements)
- [Licenses](#licenses)
- [Authors](#authors)

---

## 🧐 Application Features <a name = "features"></a>

With this application the client can access the following routes<br/>

1. `findUserWithGamesById` → should be able to find user with games list by user's ID. <br/>
1. `findAllUsersOrderedByFirstName` → should be able to list users ordered by first name. <br/>
1. `findUserByFullName` → should be able to find user by full name. <br/>
1. `findByTitleContaining` → should be able find a game by entire or partial given title. <br/>
1. `countAllGames` → should be able to get the total count of games. <br/>
1. `findUsersByGameId` → should be able to list users who have given game id. <br/>

---

## 🔁 Dependencies <a name = "dependencies"></a>

Some project library dependencies includes but are not limited to:

- "typescript": "^4.2.3",
- "uuid": "^8.3.2"
- "jest": "^26.6.3",
- "nodemon": "^2.0.7",
- "typeorm": "^0.2.31",
- "pg": "^8.5.1",

---

## ⛏️ Built Using <a name = "built_using"></a>

- [JavaScript](https://www.javascript.com/) - Programming Language
- [TypeScript](https://www.typescriptlang.org/) - Programming Language
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [PostgreSQL](https://www.postgresql.org/) - Relational Database
- [Docker](https://www.docker.com/) - Containerization Platform

---

## 🏁 Getting Started <a name = "getting_started"></a>

You can clone the repository through Command Prompt or Terminal just by typing:

```sh
git clone https://github.com/devfel/collections-backend.git
```

or download the zip from the green **"Code"** button.

Install dependencies packages with <b>yarn</b>

```sh
yarn
```

With the dependencies installed and the database created run <b>yarn test</b>.
If you are using docker the following command can be used to create an appropriated database.

```sh
docker run --name container_name -e POSTGRES_USER=user_name -e POSTGRES_PASSWORD=password -e POSTGRES_DB=database_name -p 5432:5432 -d postgres
```

Replace container_name, user_name, password and database_name with the ones you want, for this project we recommend:

- "user_name": "postgres",
- "password": "docker",
- "database_name": "queries_challenge",

---

## 🎉 Acknowledgements <a name = "acknowledgements"></a>

- Created based on a [RocketSeat](https://rocketseat.com.br/) challenge.
- Full description in Brazilian Portuguese: [Trilha Node.js - Desafio 06](https://www.notion.so/Desafio-01-Database-Queries-8d97dae581d5446e97555c43d301ee45)

- Additional challenge, database modeling: [Trilha Node.js - Desafio 07](https://www.notion.so/Desafio-02-Modelagem-do-banco-de-dados-0ce9c10f9e114be0a9ee9359d68639ff)

---

## 📝 Liceses <a name = "licenses"></a>

- Distributed under the MIT License - see the [LICENSE.md](https://github.com/devfel/collections-backend/blob/master/LICENSE.md) file for details.

---

## ✍️ Author <a name = "authors"></a>

- [@devfel](https://devfel.com/) - Luiz Flávio Felizardo
