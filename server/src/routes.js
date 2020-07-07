const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const CategoriaController = require('./controllers/CategoriaController')
const AnuncioController = require('./controllers/AnuncioController')
const UsuarioController = require('./controllers/UsuarioController');
const FornecedorController = require('./controllers/FornecedorController')
const EnderecoController = require('./controllers/EnderecoController')
const verifyToken = require('./config/verifyToken');

const routes = express.Router();
const upload = multer(multerConfig);

//routes.get('/categorias/1', CategoriaController.showCategoria)
routes.get('/categorias', CategoriaController.index)
routes.get('/usuarios', UsuarioController.index)
routes.get('/profile', verifyToken, UsuarioController.showProfile)
routes.get('/anuncio/:id', AnuncioController.showAnuncio)
routes.get('/anuncios', AnuncioController.indexPage)
routes.get('/anuncios/filtro', AnuncioController.proxAnuncio)
routes.get('/anuncios/categoria/:id', AnuncioController.indexCategoria)
routes.get('/fornecedores', FornecedorController.index)
routes.get('/estados', EnderecoController.indexEstados)
routes.get('/cidades', EnderecoController.indexCidades)
routes.get('/comentario/:idAnuncio', AnuncioController.showComentario)

routes.post('/login', UsuarioController.loginUser)
routes.post('/register', UsuarioController.createUser)
routes.post('/upgrade/usuario', verifyToken, FornecedorController.upgradeFornecedor)
routes.post('/request/password', UsuarioController.recuperarSenha)
routes.post('/anuncio', verifyToken, upload.array('files', 4), AnuncioController.createAnuncio)
routes.post('/create/endereco', verifyToken, UsuarioController.createEndereco)
routes.post('/anuncio/:idAnuncio/comentario', verifyToken, AnuncioController.comentarioAnuncio)

routes.put('/update/profile', verifyToken, UsuarioController.updateUser)
routes.put('/update/profile/image', verifyToken, upload.single('file'), UsuarioController.updateImage)
routes.put('/update/anuncio', verifyToken, upload.array('files', 4), AnuncioController.updateAnuncio)

routes.post('/testeupload', upload.single('file'), (req, res) => {
    console.log(req.file);

    return res.json({message: "Imagem cadastrada!"});
})


module.exports = routes;