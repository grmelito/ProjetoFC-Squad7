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

            const updateTypeUser = await knex('Usuario')
            .where('Usuario.IdUsuario', id)
            .update({IdTipoUsuario: 2})

            const newToken  = await knex('Usuario')
            .select('Usuario.IdUsuario', 'Usuario.IdTipoUsuario', 'Fornecedor.IdFornecedor')
            .join('Fornecedor', 'Fornecedor.IdUsuario', '=', 'Usuario.IdUsuario')
            .where('Usuario.IdUsuario', id)

            const tokenFornecedor = jwt.sign({_id: newToken}, 'Hu3Lit6NrOpl9Um')
            res.header('auth-token', tokenFornecedor).send(tokenFornecedor)
            //return res.status(200).send({message: 'Upgrade Concluido!'});
        } catch (err) {
            return res.status(500)
        }
       
    }

}