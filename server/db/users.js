const connection = require('./')

module.exports = {
  getUser
}

// Sample only: think about what you want this function to actually do...
function getUser (username, db = connection) {
  return db('users')
  .where('username', username)
  .select('id', 'username', 'hash', 'age')
}
