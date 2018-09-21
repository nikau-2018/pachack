const connection = require('./')

module.exports = {
  createLunchbox,
  getLunchbox
}

function createLunchbox (userId, db = connection) {
  return db('lunchboxes').insert({user_id: userId})
}

function getLunchbox (id, db = connection) {
  return db('lunchboxes')
    .where('id', id)
    .first()
}
