<p align="center">
  <a href="https://github.com/luccarauedys/taskmanager-api">
    <img src="./readme.png" alt="readme-logo" width="80" height="80">
  </a>
  <h2 align="center">
    taskmanager-api
  </h2>
</p>

## Como testar:

```bash

$ git clone https://github.com/luccarauedys/taskmanager-api.git

$ cd taskmanager-api

$ npm install

$ npm run dev

```

> Lembre-se de configurar as variáveis de ambiente seguindo o arquivo .env.example

<div style="margin:30px"></div>

## Rotas da API:

### Auth

```bash

- POST /signup
    - Rota para cadastrar um novo usuário.
    - headers: {}
    - body: {
        "username": "Lorem ipsum",
        "email": "lorem@gmail.com",
        "password": "loremipsum"
    }

- POST /signin
    - Rota para fazer login.
    - Retorna um $token de acesso.
    - headers: {}
    - body: {
        "email": "lorem@gmail.com",
        "senha": "loremipsum"
    }

```

### Tasks (CRUD)

```bash

- POST /tasks (exige autenticação)
    - Rota para listar todos os usuários.
    - headers: { "x-access-token": $token }
    - body: {
        "title": "loremipsum loremipsum",
        "startDate": "2022-07-11",
        "endDate": "2022-07-12"
    }

- GET /tasks (exige autenticação)
    - Rota para obter a lista de tarefas/compromissos.
    - Retorna um array com as tarefas.
    - headers: { "x-access-token": $token }
    - body: {}

- PUT /tasks/:taskId (exige autenticação)
    - Rota para editar uma tarefa/compromisso.
    - headers: { "x-access-token": $token }
    - body: Pode receber $title, $startDate e/ou $endDate.

    Exemplos:
    {
      "title": "novo título"
    }

    {
      "title": "novo título",
      "endDate": "2022-08-01"
    }

- DELETE /tasks/:taskId (exige autenticação)
    - Rota para deletar uma tarefa/compromisso.
    - headers: { "x-access-token": $token }
    - body: {}

```

<p align="center" style="margin-top:30px">
  <a href="https://github.com/luccarauedys">
    <img src="https://github.com/luccarauedys.png" alt="readme-logo" width="80" height="80" style="border-radius:50%">
  </a>
  <h2 align="center">
    Lucca Rauédys
  </h2>
  <p align="center">
  <strong>Desenvolvedor Web Full Stack Júnior</strong>
  </p>
</p>

<p align="center">Entre em contato comigo:</p>

<div style="display:flex;gap:3px;justify-content:center">
  <a href="mailto:luccarauedys@outlook.com">
    <img alt="Lucca's Email" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>

  <a href="https://www.linkedin.com/in/devluccarauedys/">
    <img alt="Lucca's LinkedIn" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a> 
  
  <a href="https://twitter.com/devluccarauedys">
    <img alt="Lucca's Twitter" src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" />
  </a>
</div>
