const express = require('express');
const routes = express.Router();

const CategoriaController = require('./controllers/CategoriaController')
const AnuncioController = require('./controllers/AnuncioController')
const UsuarioController = require('./controllers/UsuarioController')

routes.get('/categorias', CategoriaController.index)

routes.get('/usuarios', UsuarioController.index)

routes.get('/anuncio', AnuncioController.index)
routes.get('/anuncios', AnuncioController.indexPage)


module.exports = routes;