const express = require('express')

const {generateHash} = require('../auth/hash')

const router = express.Router()

const {getUser, createUser} = require('./users')

router.post('/login', login)

function login (req, res) {
  const {username, password} = req.body
  generateHash(password)
  .then (hash => getuser(username))
  if (password === 'password') {
    return res.json({
      ok: true,
      user: {
        id: 1,
        username,
        age: 10
      }
    })
  }
  res.json({
    ok: false,
    error: 'Password incorrect.'
  })
}

router.post('/register', register)

function register (req, res) {
  const {username, password, age} = req.body
  createUser({username, password, age})
    .then(() => res.status(201).json({ok: true, user: {
        username:username, password:password, age:age
    }}))
    .catch((error) => {
        if (error.message.includes('UNIQUE constraint failed: users.username')) {
          return res.status(400).json({
            ok: false,
            message: 'That user already exists.'
          })
        }
        res.status(500).json({
          ok: false,
          message: error.message
        })
      })
  }

module.exports = router
