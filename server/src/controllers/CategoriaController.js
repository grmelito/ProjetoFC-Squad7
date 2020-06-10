const knex = require('../database');

module.exports = {
    async index(req, res) {
        const results = await knex('Categorias').select('*')

        return res.json(results)
    },

    async showCategoria(req, res) {
        const results = await knex('Categorias')
            .select('*')
            .where('IdCategoria', '=', 1)
            
        return res.json(results)
    }
}