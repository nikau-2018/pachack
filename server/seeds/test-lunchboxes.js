exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('lunchboxes').del()
    .then(function () {
      // Inserts seed entries
      return knex('lunchboxes').insert([
        {id: 88801, user_id: 'jamesb', produce: null, grains: null, dairy: null, protein: null, other: null},
        {id: 88802, user_id: 'laurenh', produce: null, grains: null, dairy: null, protein: null, other: null},
        {id: 88803, user_id: 'benh', produce: null, grains: null, dairy: null, protein: null, other: null},
        {id: 88804, user_id: 'angush', produce: null, grains: null, dairy: null, protein: null, other: null},
        {id: 88805, user_id: 'maddye', produce: null, grains: null, dairy: null, protein: null, other: null},
        {id: 88806, user_id: 'zainek', produce: null, grains: null, dairy: null, protein: null, other: null}
      ])
    })
}
