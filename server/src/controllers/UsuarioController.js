const knex = require('../database');
const jwt = require('jsonwebtoken');

module.exports = {
    async index(req, res) {
        const results = await knex('Usuario').select('*');

        return res.json(results);
    },

    async showProfile(req, res) {
        try {
            const token = req.header('auth-token');
            const decoded = jwt.decode(token, 'Hu3Lit6NrOpl9Um')
            const id = decoded._id[0].IdUsuario;

            const results = await knex('Usuario')
                .select([
                    'Usuario.Nome','Usuario.Email',
                    'Usuario.DataNascimento','Usuario.Genero',
                    'Usuario.ImagemUsuario','Endereco.Bairro',
                    'Endereco.Rua','Endereco.Numero',
                    'Endereco.Complemento',
                    'Cidades.CidadeNome','Estados.EstadoNome'
                ]).join('Endereco', 'Endereco.IdEndereco' ,'=', 'Usuario.IdEndereco')
                .join('Cidades', 'Cidades.IdCidade', '=', 'Endereco.IdCidade')
                .join('Estados', 'Estados.IdEstado', '=', 'Cidades.IdEstado')
                .where('Usuario.IdUsuario', id);

            return results = res.json(results)
        } catch (err) {
            return res.status(500)
        }
    },
        

    async createUser(req, res) {
        //const emailExiste = await knex('Usuario')
           // .select(['Usuario.Email'])
           // .where({Email: req.body.Email})
        //if(emailExiste) return res.status(400).send({error: "Email ja cadastrado!"}); else {
        try {
            const data = { Nome, Email, Senha } = req.body;

            const results = await knex('Usuario')
            .insert({
                Nome,
                Email,
                Senha,
                IdTipoUsuario: 1
            });
            return res.json({message: 'Informações cadastradas!'})
        } catch (err) {
            return res.status(400).json({error: 'Email ja cadastrado'})
        }   
        //}
        
    },

    async loginUser(req, res){

        const emailReq =  req.body.Email
        const passwordReq = req.body.Senha
        const user_id  = await knex('Usuario')
        .select('Usuario.IdUsuario', 'Usuario.IdTipoUsuario')
        .where({Email: emailReq}) 

        const fornecedor_id  = await knex('Usuario')
        .select('Usuario.IdUsuario', 'Usuario.IdTipoUsuario', 'Fornecedor.IdFornecedor')
        .join('Fornecedor', 'Fornecedor.IdUsuario', '=', 'Usuario.IdUsuario')
        .where({Email: emailReq})

        const userData = await knex('Usuario')
        .where( {Email: emailReq} )
        .select(['Usuario.Senha', 'Usuario.IdUsuario'])
        .then(function(result){
            if(!result || !result[0]) {

                return res.status(400).send({error: "Email não encontrado!"})
            }

            const pass = result[0].Senha;
            if(passwordReq === pass){
                if(user_id[0].IdTipoUsuario !== 2 ){
                    const token = jwt.sign({_id: user_id}, 'Hu3Lit6NrOpl9Um')
                    res.header('auth-token', token).send(token)
                } else {
                    const token = jwt.sign({_id: fornecedor_id}, 'Hu3Lit6NrOpl9Um')
                    res.header('auth-token', token).send(token)
                }
                //return res.send({message: "Usuário logado!"})
            } else {
                return res.status(400).send({error: "Email ou senha inválidos!"})
            }
        })

    },
    
    async updateUser (req, res){

        const token = req.header('auth-token');
        const decoded = jwt.decode(token, 'Hu3Lit6NrOpl9Um')
        const id = decoded._id[0].IdUsuario;

        const Genero = req.body.Genero
        const Nome = req.body.Nome
        const Senha = req.body.Senha

        const dataUser = await knex('Usuario')
        .where('Usuario.IdUsuario ', id) 
        .update({
            Genero: Genero,
            Nome: Nome,
            Senha: Senha
        })
        return res.json({message: "Informações alteradas!"})

    }

}
