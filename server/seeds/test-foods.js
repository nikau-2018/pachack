exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {id: 66601, name: 'cucumber', category_id: 1},
        {id: 66602, name: 'apple', category_id: 1},
        {id: 66603, name: 'banana', category_id: 1},
        {id: 66604, name: 'carrots_hummus', category_id: 1},
        {id: 66605, name: 'vegie_crisps', category_id: 2},
        {id: 66606, name: 'rice_crackers', category_id: 2},
        {id: 66607, name: 'fried_rice', category_id: 2},
        {id: 66608, name: 'popcorn', category_id: 2},
        {id: 66609, name: 'milk_biscuit', category_id: 3},
        {id: 66610, name: 'yoghurt', category_id: 3},
        {id: 66611, name: 'cheese_stick', category_id: 3},
        {id: 66612, name: 'rice_pudding', category_id: 3},
        {id: 66613, name: 'chicken_wrap', category_id: 4},
        {id: 66614, name: 'egg', category_id: 4},
        {id: 66615, name: 'salmon_sushi', category_id: 4},
        {id: 66616, name: 'biltong', category_id: 4},
        {id: 66617, name: 'snack_balls', category_id: 5},
        {id: 66618, name: 'almonds', category_id: 5},
        {id: 66619, name: 'fruit_nuts', category_id: 5},
        {id: 66620, name: 'muesli_bar', category_id: 5}
      ])
    })
}
