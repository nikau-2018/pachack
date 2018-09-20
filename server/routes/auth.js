const express = require('express')

const {generateHash} = require('../auth/hash')

const router = express.Router()

const {getUser} = require('../db/users')

router.post('/login', login)

function login (req, res) {
  const {username, password} = req.body
  return getUser(username)
    .then((user) => {
      generateHash(password).then(hash => {
        
      })
    })
    .catch((err) => res.json(err))

/*
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
  }) */
}

module.exports = router
