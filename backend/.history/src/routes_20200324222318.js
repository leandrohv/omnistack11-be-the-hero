const express = require('express');

const routes = express.Router();

routes.post('/ongs', (request, response) => {
    const params = request.query;

    console.log(params);

   return response.json({
       evento: "Semana OmniStack 11.0",
       aluno: params.name
       //    aluno: "Leandro Venâncio"
   });
})

 module.exports = routes;