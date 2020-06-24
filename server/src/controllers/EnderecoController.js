const knex = require('../database');
const jwt = require('jsonwebtoken');

module.exports = {
    async indexEstados (req, res) {
        const results = await knex('Estados').select('Estados.IdEstado','Estados.EstadoNome')

        return res.json(results)
    },

    async indexCidades (req, res) {
        const results = await knex('Cidades').select('Cidades.IdCidade', 'Cidades.CidadeNome')

        return res.json(results)
    }
}