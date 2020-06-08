const knex = require('../database');

module.exports = {
    async index(req, res) {
        const results = await knex('Anuncio').select('*')

        return res.json(results)
    }
}