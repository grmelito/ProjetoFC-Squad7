const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const CategoriaController = require('./controllers/CategoriaController')
const AnuncioController = require('./controllers/AnuncioController')
const UsuarioController = require('./controllers/UsuarioController');
const FornecedorController = require('./controllers/FornecedorController')
const verifyToken = require('./config/verifyToken');

const routes = express.Router();
const upload = multer(multerConfig);

routes.get('/categorias', CategoriaController.index)
routes.get('/categorias/1', CategoriaController.showCategoria)

routes.get('/usuarios', verifyToken, UsuarioController.index)
routes.get('/profile', verifyToken, UsuarioController.showProfile)
routes.post('/login', UsuarioController.loginUser)
routes.post('/register', UsuarioController.createUser);
routes.put('/update/profile', verifyToken, UsuarioController.updateUser);
routes.put('/update/profile/image', verifyToken, upload.single('file'), UsuarioController.updateImage)

routes.get('/fornecedores', FornecedorController.index)
routes.post('/upgrade/usuario', verifyToken, FornecedorController.upgradeFornecedor)

routes.get('/anuncio/:id', AnuncioController.showAnuncio)
routes.get('/anuncios', AnuncioController.indexPage)
routes.get('/anuncios/categoria/:id', AnuncioController.indexCategoria)
routes.post('/anuncio', verifyToken, AnuncioController.createAnuncio)

routes.post('/testeupload', upload.single('file'), (req, res) => {
    console.log(req.file);

    return res.json({message: "Imagem cadastrada!"});
})


module.exports = routes;