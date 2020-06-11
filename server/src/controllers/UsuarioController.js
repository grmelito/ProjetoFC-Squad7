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
    }
}