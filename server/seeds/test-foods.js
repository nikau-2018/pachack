exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {id: 66601, name: 'cucumber', category_id: 1},
        {id: 66602, name: 'wheat', category_id: 2},
        {id: 66603, name: 'milk', category_id: 3},
        {id: 66604, name: 'chicken', category_id: 4},
        {id: 66605, name: 'chocolate', category_id: 5}
      ])
    })
}
