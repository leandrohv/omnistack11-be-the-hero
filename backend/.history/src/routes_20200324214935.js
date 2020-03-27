const express = require('express');

const routes = express.Router();

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
  routes.get('/users', (request, response) => {
    const params = request.query;

    console.log(params);

   return response.json({
       evento: "Semana OmniStack 11.0",
       aluno: params.name
       //    aluno: "Leandro Venâncio"
   });
})

routes.get('/users/:id', (request, response) => {
    const params = request.params;

    console.log(params);

   return response.json({
       evento: "Semana OmniStack 11.0",
       id: params.id
       //    aluno: "Leandro Venâncio"
   });
})

routes.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        name: body.name,
        idade: body.idade,
        sexo: body.sexo
    });
 })