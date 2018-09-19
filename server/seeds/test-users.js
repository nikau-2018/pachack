
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 88801, username: 'Tom_Hall', hash: , age:'8'},
        {id: 88802, username: '', hash:, age: 5},
        {id: 88803, username: '', hash:, age: }
      ]);
    });
};
