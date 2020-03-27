const express = require('express');

const OngController = require('./controllers/OngController');

const connection = require('./database/connection');

const routes = express.Router();

// routes.get('/ongs', async (request, response) => {
    
// });

routes.post('/ongs', async (request, response) => {
    OngController.create(body);
})

 module.exports = routes;