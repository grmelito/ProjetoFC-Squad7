const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const CategoriaController = require('./controllers/CategoriaController')
const AnuncioController = require('./controllers/AnuncioController')
const UsuarioController = require('./controllers/UsuarioController');
const AuthController = require('./controllers/AuthController');

const routes = express.Router();
const upload = multer(multerConfig);

routes.get('/categorias', CategoriaController.index)
routes.get('/categorias/1', CategoriaController.showCategoria)

routes.get('/usuarios', UsuarioController.index)
routes.get('/profile/:id', UsuarioController.showProfile)

routes.get('/anuncio', AnuncioController.index)
routes.get('/anuncios', AnuncioController.indexPage)
routes.get('/anuncios/categoria/:id', AnuncioController.indexCategoria)

routes.post('/testeupload', upload.single('file'), (req, res) => {
    console.log(req.file);

    return res.json({message: "Imagem cadastrada!"});
})

routes.post('/register', UsuarioController.createUser);

module.exports = routes;