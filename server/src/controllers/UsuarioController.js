const knex = require('../database');
const jwt = require('jsonwebtoken');
const userService = require('../Services/UsuarioService');

module.exports = {
    async index(req, res) {
        const results = await userService.findAll();

        return res.json(results);
    },

    async showProfile(req, res) {
        try {
            const token = req.header('auth-token');
            const decoded = jwt.decode(token, 'Hu3Lit6NrOpl9Um')
            const id = decoded._id[0].IdUsuario;

            const existEndereco = await knex('Usuario')
            .select(['Usuario.IdEndereco'])
            .where('Usuario.IdUsuario', id);

            if (existEndereco[0].IdEndereco != null) {
                const results = await knex('Usuario')
                .select([
                    'Usuario.Nome','Usuario.Email',
                    'Usuario.DataNascimento','Usuario.Genero',
                    'Usuario.ImagemUsuario','Endereco.Bairro',
                    'Endereco.Rua','Endereco.Numero',
                    'Endereco.Complemento', 'Endereco.Cep',
                    'Cidades.CidadeNome','Estados.EstadoNome'
                ]).join('Endereco', 'Endereco.IdEndereco' ,'=', 'Usuario.IdEndereco')
                .join('Cidades', 'Cidades.IdCidade', '=', 'Endereco.IdCidade')
                .join('Estados', 'Estados.IdEstado', '=', 'Cidades.IdEstado')
                .where('Usuario.IdUsuario', id);

                return results = res.json(results)
            } else {
                const resultsLess = await knex('Usuario')
                .select([
                    'Usuario.Nome','Usuario.Email',
                    'Usuario.DataNascimento','Usuario.Genero',
                    'Usuario.ImagemUsuario'])
                .where('Usuario.IdUsuario', id);

                return resultsLess = res.json(resultsLess)
            }
        } catch (err) {
            return res.status(500).send({error: 'Erro ao mostrar perfil!'})
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

                return res.status(400).send({error: "Email ou senha inválidos!"})
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

        const data = {Genero, Nome, Senha, DataNascimento} = req.body

        if(data){

            const dataUser = await knex('Usuario')
            .where('Usuario.IdUsuario ', id) 
            .update({
                Genero: req.body.Genero,
                Nome: req.body.Nome,
                Senha: req.body.Senha,
                DataNascimento: req.body.DataNascimento,
        })     
            const endereco = await knex('Usuario')
            .where('Usuario.IdUsuario', id)
            .join('Endereco', 'Endereco.IdEndereco', '=', 'Usuario.IdEndereco')
            .update({
                Cep: req.body.Cep,
                Bairro: req.body.Bairro,
                Rua: req.body.Rua,
                Numero: req.body.Numero,
                Complemento: req.body.Complemento,
                IdCidade: req.body.IdCidade,
        })
        return res.json({message: "Informações alteradas!"})
        } 
        
        else{   
            const endereco = await knex('Usuario')
            .where('Usuario.IdUsuario', id)
            .join('Endereco', 'Endereco.IdEndereco', '=', 'Usuario.IdEndereco')
            .update({
                Cep: req.body.Cep,
                Bairro: req.body.Bairro,
                Rua: req.body.Rua,
                Numero: req.body.Numero,
                Complemento: req.body.Complemento,
                IdCidade: req.body.IdCidade,
        })
        return res.json({message: "Informações alteradas!"})       

    }},

    async updateImage (req, res) {
        const token = req.header('auth-token');
        const decoded = jwt.decode(token, 'Hu3Lit6NrOpl9Um')
        const id = decoded._id[0].IdUsuario;

        const Imagem = req.file.filename

        const userImage = await knex('Usuario')
        .where('Usuario.IdUsuario', id)
        .update({ ImagemUsuario: Imagem })

        return res.json({message: 'Imagem alterada com sucesso!'})
    },

    async createEndereco (req, res) {
        try {
            const token = req.header('auth-token');
            const decoded = jwt.decode(token, 'Hu3Lit6NrOpl9Um')
            const id = decoded._id[0].IdUsuario;

            const data = { Cep, Bairro, Rua, Numero, Complemento, IdCidade } = req.body;
            const results = await knex('Endereco')
            .insert({
                Cep,
                Bairro,
                Rua,
                Numero,
                Complemento,
                IdCidade
            });

            const updateUsuario = await knex('Usuario')
            .where('Usuario.IdUsuario', id)
            .update({ IdEndereco: results})

            return res.json({message: 'Endereço cadastrado com sucesso!'})
        } catch (err) {
            return res.status(400).send({error: 'Erro ao cadastrar endereço'})
        }  
    },

    async recuperarSenha (req, res) {  
        const Nome = req.body.Nome
        const Email = req.body.Email

        const result = await knex('Usuario')
            .select('Usuario.Senha')
            .where('Usuario.Nome', Nome).andWhere('Usuario.Email', '=', Email)

        if(result.length == 0) return res.status(400).send({error: 'Informações Inválidas!'});
        return res.status(200).send(result)
            
    }

}
