const express = require('express');

const app = express();

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
   * Query: 
   */

app.post('/users', (request, response) => {
   return response.json({
       evento: "Semana OmniStack 11.0",
       aluno: "Leandro Venâncio"
   });
})

app.listen(3333);