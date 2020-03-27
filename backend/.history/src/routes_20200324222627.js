const express = require('express');

const routes = express.Router();

routes.post('/ongs', (request, response) => {
    const ongs = request.body;

    console.log(ongs);

   return response.json({ongs});
})

 module.exports = routes;