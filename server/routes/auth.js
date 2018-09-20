const express = require('express')

const router = express.Router()

router.post('/login', login)

function login (req, res) {
  const {username, password} = req.body
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
  // TODO: make sure username doesn't already exist
  // TODO: if not, hash the password and add the user to the database
}

module.exports = router
