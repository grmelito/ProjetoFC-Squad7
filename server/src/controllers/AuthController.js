const knex = require('../database');

module.exports = {
    async index(req, res) {
        const results = await knex('Usuario').select('*');

        return res.json(results);
    },
    
    async UserAuth(req, res) {
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