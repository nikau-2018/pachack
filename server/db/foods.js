const connection = require('./')

module.exports = {
  getFoods
}

function getFoods (db = connection) {
  return db('foods')
    .join('categories', 'foods.category_id', '=', 'categories.id')
    .select('categories.name as categoryName', 'categories.id as categoriesId', 'foods.category_id as categoryId', 'foods.name as foodsName', 'foods.id')
}
