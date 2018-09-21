const connection = require('./')

module.exports = {
  getFoods
}

function getFoods (db = connection) {
  return db('foods')
    .join('categories', 'foods.category_id', 'categories.id')
    .select()
}
