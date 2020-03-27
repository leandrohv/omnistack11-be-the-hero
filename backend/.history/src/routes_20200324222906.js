const express = require('express');
const crypto = require('crypto');

const routes = express.Router();

routes.post('/ongs', (request, response) => {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString();
    console.log(data);

   return response.json(data);
})

 module.exports = routes;