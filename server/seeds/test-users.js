
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 88801, username: 'tomh', hash: 'purple', age: 8},
        {id: 88802, username: 'sallyg', hash: 'yellow', age: 5},
        {id: 88803, username: 'bobb', hash: 'pink', age: 6},
        {id: 88804, username: 'sarahm', hash: 'orange', age: 4},
        {id: 88805, username: 'harrys', hash: 'red', age: 5},
        {id: 88806, username: 'gracen', hash: 'green', age: 7}
      ])
    })
}
