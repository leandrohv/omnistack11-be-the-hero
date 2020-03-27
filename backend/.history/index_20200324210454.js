const express = require('express');

const app = express();

/**
 * Rota / Recurso
 */

app.get('/', (request, response) => {
   return response.json({
       evento: "Semana OmniStack 11.0",
       aluno: "Leandro Venâncio"
   });
})

app.listen(3333);