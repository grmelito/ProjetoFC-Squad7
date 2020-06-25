const knex = require('../database');
const jwt = require('jsonwebtoken');


module.exports = {
    async index(req, res) {
        const results = await knex('Anuncio').select('*')

        return res.json(results)
    },

    async indexPage(req, res) {
        try {
            const {page = 1} = req.query

            const results = await knex('Anuncio')
            .limit(12)
            .offset((page - 1) * 12)
            .select([
                'Anuncio.IdAnuncio',
                'Anuncio.Titulo',
                'Anuncio.ImagemAnuncio',
                'Anuncio.IdCategoria',
                'Anuncio.IdFornecedor']);
            
            return res.json(results);
        } catch(err) {
            return res.status(500).send({error: 'Erro ao filtrar anuncios!'})
        }
        
    },

    async indexCategoria(req, res) {
        try {
            const { id } = req.params
            const {page = 1} = req.query

            const results = await knex('Anuncio')
                .limit(12)
                .offset((page - 1) * 12)
                .select([
                    'Anuncio.IdAnuncio',
                    'Anuncio.Titulo',
                    'Anuncio.ImagemAnuncio',
                    'Anuncio.IdCategoria',
                    'Anuncio.IdFornecedor'
                ]).where('Anuncio.IdCategoria', id);

            results[0].ImagemAnuncio = results[0].ImagemAnuncio.split(";");
            return results = res.json(results)
        } catch(err){
            return res.status(500)
        }
        
    },

    async createAnuncio(req, res) {
        const token = req.header('auth-token');
        const decoded = jwt.decode(token, 'Hu3Lit6NrOpl9Um')
        const id = decoded._id[0].IdFornecedor;
        
        const data = { Titulo, Descricao, Telefone, Instagram, Facebook, Site, IdCategoria } = req.body
        var arrayImages = ""

        req.files.forEach(file => {
            arrayImages += file.filename + ";"
        });
        arrayImages = arrayImages.substring(0, arrayImages.length -1);

        const existsAnuncio = await knex('Fornecedor')
        .where('Fornecedor.IdFornecedor', id)
        .join('Anuncio', 'Anuncio.IdFornecedor', '=', 'Fornecedor.IdFornecedor')
        .select('Anuncio.IdAnuncio')
        
        if(!existsAnuncio.length>0) {
            const results = await knex('Anuncio')
            .insert({
                Titulo,
                Descricao,
                ImagemAnuncio: arrayImages,
                Telefone,
                Instagram,
                Facebook,
                Site,
                IdCategoria,
                IdFornecedor: id
            });
            return res.send({message: 'Anuncio Cadastrado!'})
            //return console.log(arrayImages)
        } else {
            res.send({error: 'Você ja possui um anuncio!'})
        }   

    }, 
    
    async showAnuncio(req, res){
        const {id} = req.params

        const results = await knex('Anuncio')
        .select(['Anuncio.Titulo',
        'Anuncio.Descricao',
        'Anuncio.ImagemAnuncio',
        'Anuncio.Telefone',
        'Anuncio.Instagram',
        'Anuncio.Facebook',
        'Anuncio.Site',
        'Categorias.CategoriaNome'])
        .join('Categorias', 'Categorias.IdCategoria','=', 'Anuncio.IdCategoria')
        .where('Anuncio.IdAnuncio', id)

        results[0].ImagemAnuncio = results[0].ImagemAnuncio.split(";");
        return res.json(results)
    },
     
    async updateAnuncio(req, res){
        const token = req.header('auth-token');
        const decoded = jwt.decode(token, 'Hu3Lit6NrOpl9Um')
        const id = decoded._id[0].IdFornecedor;
        
        const data = { Titulo, Descricao, Telefone, Instagram, Facebook, Site, IdCategoria } = req.body
        var arrayImages = ""

        req.files.forEach(file => {
            arrayImages += file.filename + ";"
        });
        arrayImages = arrayImages.substring(0, arrayImages.length -1);

        if(arrayImages != ""){
            const dataUser = await knex('Anuncio')
            .where('Anuncio.IdFornecedor', id) 
            .update({
                Titulo: Titulo,
                Descricao: Descricao,
                Telefone: Telefone,
                ImagemAnuncio: arrayImages,
                Instagram: Instagram,
                Facebook: Facebook,
                Site: Site,
                IdCategoria: IdCategoria
            })
            return res.json({message: "Informações alteradas!"})
        } else {
            const dataUser = await knex('Anuncio')
            .where('Anuncio.IdFornecedor', id) 
            .update({
                Titulo: Titulo,
                Descricao: Descricao,
                Telefone: Telefone,
                Instagram: Instagram,
                Facebook: Facebook,
                Site: Site,
                IdCategoria: IdCategoria
            })
            return res.json({message: "Informações alteradas!"})
        }
        
    }, 

    async comentarioAnuncio(req, res){
        const token = req.header('auth-token');
        const decoded = jwt.decode(token, 'Hu3Lit6NrOpl9Um')
        const id = decoded._id[0].IdUsuario;

        const { idAnuncio } = req.params
        const Comentario = req.body.Comentario

        const dataComentario = await knex('Comentario')
        .insert({
            Comentario,
            IdUsuario: id,
            IdAnuncio: idAnuncio
            
        })
        return res.send({message: "Comentário realizado!"})
    },

    async showComentario(req, res){
    
        const {idAnuncio} = req.params

        const comentario = await knex('Comentario')
        .select([
            'Comentario.Comentario',
            'Comentario.IdComentario',
            'Comentario.IdUsuario'
        ])
        .where('Comentario.IdAnuncio', idAnuncio)

        return res.json(comentario)
    } 
}