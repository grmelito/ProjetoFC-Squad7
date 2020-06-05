
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('TipoUsuario').del()
    .then(function () {
      // Inserts seed entries
      return knex('TipoUsuario').insert([
        {CategoriaNome: 'Administrador'},
        {CategoriaNome: 'Usuario'}
      ]);
    });
};
