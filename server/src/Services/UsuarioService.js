const knex = require('../database');

module.exports.findAll = async function () {
    return await knex('Usuario').select('*');
}
