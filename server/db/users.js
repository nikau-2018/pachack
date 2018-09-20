const connection = require('./')

module.exports = {
  getUser,
  createUser
}

// Sample only: think about what you want this function to actually do...
function getUser (username, db = connection) {
  return db('users')
    .where('username', username)
    .first()
}

function createUser ({username, hash, age}, db = connection) {
  return db('users').insert({username, hash, age})
}
