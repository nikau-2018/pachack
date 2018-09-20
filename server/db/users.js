const connection = require('./')

module.exports = {
  getUser,
  createUser
}

// Sample only: think about what you want this function to actually do...
function getUser (username, db = connection) {
  return db('users')
    .where('username', username)
    .select('id', 'username', 'hash', 'age')
}

function createUser ({username, password, age}, db = connection) {
  return db('users').insert({username, hash: password, age})
}
