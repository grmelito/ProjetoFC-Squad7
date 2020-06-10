const express = require('express');
const routes = express.Router();

const CategoriaController = require('./controllers/CategoriaController')
const AnuncioController = require('./controllers/AnuncioController')
const UsuarioController = require('./controllers/UsuarioController')

routes.get('/categorias', CategoriaController.index)
routes.get('/categorias/1', CategoriaController.showCategoria)

routes.get('/usuarios', UsuarioController.index)

routes.get('/anuncio', AnuncioController.index)
routes.get('/anuncios', AnuncioController.indexPage)
routes.get('/anuncios/categoria/:id', AnuncioController.indexCategoria)


module.exports = routes;