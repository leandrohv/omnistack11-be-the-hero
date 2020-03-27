const express = require('express');

const routes = express.Router();

routes.post('/ongs', (request, response) => {
    const ongs = request.body;

    console.log(ongs);

   return response.json({
       evento: "Semana OmniStack 11.0",
       aluno: params.name
       //    aluno: "Leandro Venâncio"
   });
})

 module.exports = routes;