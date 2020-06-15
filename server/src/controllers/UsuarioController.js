const knex = require('../database');
const jwt2 = require('../config/verifyToken');
const jwt = require('jsonwebtoken');

module.exports = {
    async index(req, res) {
        const results = await knex('Usuario').select('*');

        return res.json(results);
    },

    async showProfile(req, res) {
        const { id } = req.params

        const results = await knex('Usuario')
            .select([
                'Usuario.Nome',
                'Usuario.Email',
                'Usuario.DataNascimento',
                'Usuario.Genero',
                'Usuario.ImagemUsuario',
            ]).where('Usuario.IdUsuario', id);

        return results = res.json(results)
    },

    async createUser(req, res) {
        const emailExiste = await knex('Usuario')
        .select('Usuario.Email')
        .where({Email: req.body.Email})

        if(emailExiste) return res.status(400).send({error: "Email ja cadastrado!"}); else {
            const data = { Nome, Email, Senha } = req.body;

            const results = await knex('Usuario')
            .insert({
                Nome,
                Email,
                Senha
            });

            return res.json({message: 'Informações cadastradas!'})

        }
    },

    async loginUser(req, res){

        const emailReq =  req.body.Email
        const passwordReq = req.body.Senha

        const userData = await knex('Usuario')
        .where( {Email: emailReq} )
        .select(['Usuario.Senha', 'Usuario.IdUsuario'])
        .then(function(result){
            if(!result || !result[0]) {

                return res.status(400).send({error: "Email não encontrado!"})
            }

            const pass = result[0].Senha;
            if(passwordReq === pass){
                const token = jwt.sign({_id: emailReq}, 'Hu3Lit6NrOpl9Um')
                res.header('auth-token', token).send(token)
                //return res.send({message: "Usuário logado!"})
            } else {
                return res.status(400).send({error: "Email ou senha inválidos!"})
            }
        })
        
    // if(!userData.length> 0) return res.status(400).send({error: "Email não encontrado!"})

    // const validPassword = await knex('Usuario')
    // .select( 'Usuario.Senha' )
    // .where( 'Usuario.Email', user.Email, 'Usuario.Senha', user.Senha )

    // if(!validPassword) return res.status(400).send({error: "Senha inválida"})
     
    //  return res.json({message: "Usuário logado"})

    } 
    
        
}
