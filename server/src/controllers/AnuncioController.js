const knex = require('../database');

module.exports = {
    async index(req, res) {
        const results = await knex('Anuncio').select('*')

        return res.json(results)
    },

    async indexPage(req, res) {
        const {page = 1} = req.query

        const results = await knex('Anuncio')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'Anuncio.IdAnuncio',
                'Anuncio.Titulo',
                'Anuncio.ImagemAnuncio',
                'Anuncio.IdCategoria',
                'Anuncio.IdFornecedor']);

        return res.json(results);
    },

    async indexCategoria(req, res) {
        const { id } = req.params
        const {page = 1} = req.query

        const results = await knex('Anuncio')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'Anuncio.IdAnuncio',
                'Anuncio.Titulo',
                'Anuncio.ImagemAnuncio',
                'Anuncio.IdCategoria',
                'Anuncio.IdFornecedor'
            ]).where('Anuncio.IdCategoria', id);

        return results = res.json(results)
    }
}