const connection = require('./')

module.exports = {
  createLunchbox,
  getLunchbox,
  getUserLunchbox,
  removeUserLunchbox,
  storeFoodSelection
}

function createLunchbox (userId, db = connection) {
  return db('lunchboxes').insert({ user_id: userId }, [ 'id' ])
    .catch(err => console.error('---', err.message))
}

function getLunchbox (id, db = connection) {
  return db('lunchboxes')
    .where('id', id)
    .first()
    .catch(err => console.error('---', err.message))
}

function getUserLunchbox (userId, db = connection) {
  return db('lunchboxes')
    .where('user_id', userId)
    .first()
    .catch(err => console.error('---', err.message))
}

function removeUserLunchbox (userId, db = connection) {
  return db('lunchboxes')
    .where('user_id', userId)
    .del()
    .catch(err => console.error('---', err.message))
}

function storeFoodSelection (lunchboxId, data, db = connection) {
  return db('lunchboxes')
    .where('id', lunchboxId)
    .update(data)
    .catch(err => console.error('---', err.message))
}
