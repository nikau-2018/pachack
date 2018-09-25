const connection = require('./')

const {generateHash} = require('../auth/hash')

module.exports = {
  getUser,
  getUserById,
  createUser
}

function getUser (username, db = connection) {
  return db('users')
    .where('username', username)
    .first()
}

function getUserById (id, db = connection) {
  return db('users')
    .where({id})
    .first()
}

function createUser ({username, password, age}, db = connection) {
  return generateHash(password)
    .then(hash => db('users').insert({username, hash, age}))
}
