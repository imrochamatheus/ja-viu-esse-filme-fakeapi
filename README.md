<h1 align="center">
📄<br>Endpoints
</h1>

- Base URL : https://ja-viu-esse-filme.herokuapp.com/

- Catastro:

  - POST &rarr; /api/register
    - name
    - email
    - password

- Login

  - POST &rarr; /api/login
    - email
    - password

- User

  - GET &rarr; /users/(user_id) &rarr; Retorna todos dados do usuário, incluindo coleção, lista de desejos e comentários.

    - headers: { Authorization: Bearer Token }</br></br>

  - PATCH &rarr; /users/(user_id) &rarr; Atualizar um campo específico de um usuário

    - headers: { Authorization: Bearer Token }
    - body: any single field (name, email or password)</br></br>

  - PUT &rarr; /users/(user_id) &rarr; Atualizar integralmente os dados de um usuário

    - headers: { Authorization: Bearer Token }
    - body: {
      name: 'new name',
      email: 'new email',
      password: 'new password'
      }</br></br>

  - DELETE &rarr; /users/(user_id) &rarr; Excluir um usuário

    - headers: { Authorization: Bearer Token }</br></br>

- Comments

  - GET &rarr; /api/comments/movie/(movieId referente à The movie DB) &rarr; Retorna todos os comentários referentes ao filme cujo id foi passado

  - POST: /api/comments => Fazer um comentário

    - headers { Authorization: Bearer Token }
    - body: {
      userId: 'id do usuário'
      message: 'corpo do comentário'
      movieId: (Referente à The movie DB)
      }</br></br>

  - DELETE &rarr; /coments/(comment_id) => Excluir um comentário
    - headers { Authorization: Bearer Token }</br></br>

- Watched/wishWatched

  - GET &rarr; /api/watched or wishWatch/(userId) &rarr; Retorna todas as mídias adicianadas à coleção ou lista de desejos

  - POST &rarr; /watched or wishWatch &rarr; Adiciona um filme à coleção ou lista de desejos

    - headers { Authorization: Bearer Token }
    - body {
      userId
      movieId (referente à The movie Db)
      }</br></br>

  - DELETE &rarr; /watched/(id do elemento) or /wishWatch/(id do elemento) &rarr; Remove um filme da coleção ou lista de desejos
    - headers { Authorization: Bearer Token }</br></br>

- Who watched

  - GET &rarr; /api/who-watched/(movie_id) &rarr; Retorna os dados dos usuários que possuem a mídia como assistida
