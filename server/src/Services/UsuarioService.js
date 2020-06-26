const knex = require('../database/index');

module.exports.findAll = async () => {
    return await knex('Usuario').select('*') 
}
