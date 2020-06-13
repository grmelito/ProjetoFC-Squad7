const knex = require('../database');

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

    }
}