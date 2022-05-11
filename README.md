## Endpoints

#

### Cadastro

```
- POST: /register <br/>
  - name
  - email
  - password

#
```

### Login

```
- POST: /login <br/>
  - email
  - password

#
```

### User

```

- GET: api/user/(user_id) => Retorna todos dados do usuário, incluindo coleção, lista de desejos e comentários

- PATCH: api/user/(user_id) => Atualizar um campo específico de um usuário
  - any single field (name, email or password)

###

- PUT: api/user/(user_id) => Atualizar integralmente os dados de um usuário
  - name
  - email
  - password

###

- DELETE: api/user/(user_id) => Excluir um usuário

###

#
```

### Comments

```

- GET: /api/comments/movie/(movieId referente à The movie DB)

- POST: /api/comments => Fazer um comentário

  - userId
  - message
  - movieId (Referente à The movie DB)

###

- DELETE: /api/coments/(comment_id) => Excluir um comentário

Qualquer um desses 2 endpoints pode ser usado para realizar login com um dos usuários cadastrados na lista de "Users"

#
```

### Watched/wishWatched

```

- GET: /api/watched or wishWatch/(userId) => Retorna todas as mídias adicianadas à coleção ou lista de desejos


- POST: /api/watched or wishWatch => Adiciona um filme à coleção ou lista de desejos

  - userId
  - movieId (referente à The movie Db)


- DELETE: /api/watched or wishWatch/(id do elemento) => Remove um filme da coleção ou lista de desejos

```

### Who watched

```

- GET: /api/who-watched/(movie_id) -> Retorna os dados dos usuários que possuem a mídia como assistida

```
