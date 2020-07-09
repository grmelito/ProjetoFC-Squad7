const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const CategoriaController = require('./controllers/CategoriaController')
const AnuncioController = require('./controllers/AnuncioController')
const UsuarioController = require('./controllers/UsuarioController');
const FornecedorController = require('./controllers/FornecedorController')
const EnderecoController = require('./controllers/EnderecoController')
const verifyToken = require('./config/verifyToken');

const routes = express.Router();
const upload = multer(multerConfig);


const swaggerOptions = {
    swaggerDefinition: {
        info: {
          version: "4.1.4",
          title: "Projeto BFriend - S7",
          description: "Documentação da API do projeto.",
          contact: {
            name: "https://github.com/grmelito/ProjetoFC-Squad7"
          },
          servers: ["http://localhost:3333"]
        }
      },
      // ['.routes/*.js']
      apis: ["src/routes.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
routes.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//routes.get('/categorias/1', CategoriaController.showCategoria)

/**
* @swagger 
* /categorias:
*  get:
*    description: Use essa requisição para trazer todas as categorias
*    summary: Buscar todas as categorias
*    responses:
*       '200':
*           description: Requisição feita com sucesso
*/
routes.get('/categorias', CategoriaController.index)
/**
* @swagger 
* /usuarios:
*  get:
*    description: Use essa requisição para listar todos os usuarios
*    summary: Buscar todos os usuarios
*    responses:
*       '200':
*           description: Requisição feita com sucesso
*/
routes.get('/usuarios', UsuarioController.index)
/**
* @swagger 
* /profile:
*  get:
*     summary: Listar as informações de perfil do usuario.
*     parameters:
*       - in: header
*         name: auth-token
*         description: Use essa requisição para listar as informações do perfil usuario.
*         schema:
*           required: true
*           type: string
*     responses:
*       '200':
*         description: Requisição feita com sucesso
*       '400':
*         description: Token Inválido!
*/
routes.get('/profile', verifyToken, UsuarioController.showProfile)
/**
* @swagger 
* /anuncio/{id}:
*  get:
*     summary: Listar um anuncio.
*     parameters:
*       - in: path
*         name: id
*         description: Use essa requisição para listar um anuncio especifico
*         schema:
*           required: true
*           type: integer
*     responses:
*       '200':
*         description: Requisição feita com sucesso
*/
routes.get('/anuncio/:id', AnuncioController.showAnuncio)
/**
* @swagger 
* /anuncios:
*  get:
*     summary: Listar um anuncio com filtro page.
*     parameters:
*       - in: query
*         name: page
*         description: Use essa requisição para listar os anuncios(12 anuncios por página)
*         schema:
*           required: true
*           type: integer
*     responses:
*       '200':
*         description: Requisição feita com sucesso
*/
routes.get('/anuncios', AnuncioController.indexPage)
routes.get('/anuncios/filtro', AnuncioController.proxAnuncio)
routes.get('/anuncios/categoria/:id', AnuncioController.indexCategoria)
routes.get('/fornecedores', FornecedorController.index)
routes.get('/estados', EnderecoController.indexEstados)
routes.get('/cidades', EnderecoController.indexCidades)
routes.get('/comentario/:idAnuncio', AnuncioController.showComentario)

/**
* @swagger
*   paths:
*      /login:
*        post:
*          summary: Processo de login.
*          consumes:
*            - application/json
*          parameters:
*            - in: body
*              name: user
*              description: Fazer login com um usuario existente.
*              schema:
*                type: object
*                required:
*                  - Email
*                  - Senha
*                properties:
*                  Email:
*                    type: string
*                  Senha:
*                    type: string
*          responses:
*            200:
*              description: Usuário logado
*/
routes.post('/login', UsuarioController.loginUser)
/**
* @swagger
*   paths:
*      /register:
*        post:
*          summary: Novo usuário.
*          consumes:
*            - application/json
*          parameters:
*            - in: body
*              name: user
*              description: Criar um novo usuário.
*              schema:
*                type: object
*                required:
*                  - Nome
*                  - Email
*                  - Senha
*                properties:
*                  Nome:
*                    type: string
*                  Email:
*                    type: string
*                  Senha:
*                    type: string
*          responses:
*            201:
*              description: Usuário criado
*/
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