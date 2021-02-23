
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reflections').del()
    .then(function () {
      // Inserts seed entries
      return knex('reflections').insert([
        {id: 1, date: '01/23/2020', userId: '1', body:"I'm sad.", feeling:'sad'},
        {id: 2, date: '01/24/2020', userId: '1', body:"I'm fine.", feeling:'fine'},
        {id: 3, date: '01/25/2020', userId: '1', body:"I'm angry.", feeling:'angry'}
      ]);
    });
};
