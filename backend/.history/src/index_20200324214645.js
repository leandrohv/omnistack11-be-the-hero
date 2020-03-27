const express = require('express');

const app = express();

app.use(express.json());

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP
  * 
  * GET: Buscar/Listaruma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação do back-end
  * DELETE: Deletar uma informação do back-end
  */

  /**
   * Tipos de parâmetros
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos 
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * rodar o servidor "npm start"
    */

    /**
     * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
     * NoSQL: MongoDB, CouchDB, Etc.
     */

     /**
      * 
      * Driver: SELECT * FROM users
      * Query Builder utilizado: knexjs
      * Query Builder: table('users').select('*').where()
      */

app.get('/users', (request, response) => {
    const params = request.query;

    console.log(params);

   return response.json({
       evento: "Semana OmniStack 11.0",
       aluno: params.name
       //    aluno: "Leandro Venâncio"
   });
})

app.get('/users/:id', (request, response) => {
    const params = request.params;

    console.log(params);

   return response.json({
       evento: "Semana OmniStack 11.0",
       id: params.id
       //    aluno: "Leandro Venâncio"
   });
})

app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        name: body.name,
        idade: body.idade,
        sexo: body.sexo
    });
 })

app.listen(3333);