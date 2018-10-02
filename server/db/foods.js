const connection = require('./')

module.exports = {
  getFoods
}

function getFoods (db = connection) {
  return db('foods')
    .join('categories', 'foods.category_id', '=', 'categories.id')
    .select(
      'categories.name as categoryName',
      'foods.category_id as categoryId',
      'foods.name as name',
      'foods.id as id'
    )
}
