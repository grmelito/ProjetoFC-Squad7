const knex = require('../database');
const jwt = require('jsonwebtoken');

module.exports = {
    async indexEstados (req, res) {
        const results = await knex('Estados').select('Estados.IdEstado','Estados.EstadoNome')

        return res.json(results)
    }
}