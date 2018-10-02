exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {id: 66601, name: 'cucumber', category_id: 1},
        {id: 66602, name: 'apple', category_id: 1},
        {id: 66603, name: 'banana', category_id: 1},
        {id: 66604, name: 'carrots hummus', category_id: 1},
        {id: 66605, name: 'vegie crisps', category_id: 2},
        {id: 66606, name: 'rice crackers', category_id: 2},
        {id: 66607, name: 'fried rice', category_id: 2},
        {id: 66608, name: 'popcorn', category_id: 2},
        {id: 66609, name: 'milk biscuit', category_id: 3},
        {id: 66610, name: 'yoghurt', category_id: 3},
        {id: 66611, name: 'cheese stick', category_id: 3},
        {id: 66612, name: 'rice pudding', category_id: 3},
        {id: 66613, name: 'chicken wrap', category_id: 4},
        {id: 66614, name: 'egg', category_id: 4},
        {id: 66615, name: 'salmon sushi', category_id: 4},
        {id: 66616, name: 'biltong', category_id: 4},
        {id: 66617, name: 'snack balls', category_id: 5},
        {id: 66618, name: 'almonds', category_id: 5},
        {id: 66619, name: 'fruit nuts', category_id: 5},
        {id: 66620, name: 'muesli bar', category_id: 5}
      ])
    })
}
