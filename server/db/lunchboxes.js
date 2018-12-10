const connection = require('./')

module.exports = {
  createLunchbox,
  getLunchbox,
  getUserLunchbox,
  removeUserLunchbox,
  storeFoodSelection
}

function createLunchbox (userId, db = connection) {
  return db('lunchboxes').insert({ user_id: userId })
}

function getLunchbox (id, db = connection) {
  return db('lunchboxes')
    .where('id', id)
    .first()
}

function getUserLunchbox (userId, db = connection) {
  return db('lunchboxes')
    .where('user_id', userId)
    .first()
}

function removeUserLunchbox (userId, db = connection) {
  return db('lunchboxes')
    .where('user_id', userId)
    .del()
}

function storeFoodSelection (lunchboxId, data, db = connection) {
  return db('lunchboxes')
    .where('id', lunchboxId)
    .update(data)
}
