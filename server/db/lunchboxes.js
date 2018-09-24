const connection = require('./')

module.exports = {
  createLunchbox,
  getLunchbox,
  storeFoodSelection
}

function createLunchbox (userId, db = connection) {
  return db('lunchboxes').insert({user_id: userId})
}

function getLunchbox (id, db = connection) {
  return db('lunchboxes')
    .where('id', id)
    .first()
}

function storeFoodSelection (lunchboxId, foodId, db = connection) {
  return db('foods')
    .join('categories', 'foods.category_id as foodId', 'categories.id')
    .where('foodId', foodId)
    .select('categories.name')
    .then((categoryName) => {
      db('lunchboxes')
        .where('id', lunchboxId)
        .update({
          categoryName: foodId
        })
    })
}
