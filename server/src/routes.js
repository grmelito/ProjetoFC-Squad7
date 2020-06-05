const express = require('express');
const routes = express.Router();

const CategoriaController = require('./controllers/CategoriaController')

routes.get('/categorias', CategoriaController.index)

module.exports = routes;