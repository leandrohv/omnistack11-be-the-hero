const express = require('express');

const OngController = require('./controllers/IncidentController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);

 module.exports = routes;