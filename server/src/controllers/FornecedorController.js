const jwt = require('jsonwebtoken');
const knex = require('../database');

module.exports = {
    async index(req, res) {
        const results = await knex('Fornecedor').select('*');

        return res.json(results);
    },

    async upgradeFornecedor (req, res) {
        try {
            const token = req.header('auth-token');
            const decoded = jwt.decode(token, 'Hu3Lit6NrOpl9Um')
            const id = decoded._id[0].IdUsuario;
    
            const CPFouCNPJ = req.body.CPFouCNPJ
    
            const results = await knex('Fornecedor')
            .insert({
                CPFouCNPJ,
                IdUsuario: id
            });
    
            return res.json({message: 'Upgrade Concluido!'});
        } catch (err) {
            return res.status(500)
        }
       
    }

}