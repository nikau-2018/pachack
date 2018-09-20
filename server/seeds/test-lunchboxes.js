exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('lunchboxes').del()
    .then(function () {
      // Inserts seed entries
      return knex('lunchboxes').insert([
        {id: 77701, user_id: 88801, produce: null, grains: null, dairy: null, protein: null, other: null},
        {id: 77702, user_id: 88802, produce: null, grains: null, dairy: null, protein: null, other: null},
        {id: 77703, user_id: 88803, produce: null, grains: null, dairy: null, protein: null, other: null},
        {id: 77704, user_id: 88804, produce: null, grains: null, dairy: null, protein: null, other: null},
        {id: 77705, user_id: 88805, produce: null, grains: null, dairy: null, protein: null, other: null},
        {id: 77706, user_id: 88806, produce: null, grains: null, dairy: null, protein: null, other: null}
      ])
    })
}
