const express = require('express');
const routes = express.Router();

const CategoriaController = require('./controllers/CategoriaController')
const AnuncioController = require('./controllers/AnuncioController')


routes.get('/categorias', CategoriaController.index)

routes.get('/anuncio', AnuncioController.index)

module.exports = routes;