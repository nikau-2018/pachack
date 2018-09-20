const express = require('express')

const {generateHash} = require('../auth/hash')

const router = express.Router()

const {getUser} = require('./users')

router.post('/login', login)

function login (req, res) {
  const {username, password} = req.body
  generateHash(password)
  .then (hash => {
      getUser(username)
      .then((user) => )
    }
)

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

 module.exports = router

