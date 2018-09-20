const express = require('express')

const {checkHash} = require('../auth/hash')
const {getUser} = require('../db/users')
const {getToken} = require('../auth/token')

const router = express.Router()

router.post('/login', login)

function login (req, res) {
  const { username, password } = req.body

  return getUser(username)
    .then(user => {
      if (!user) {
        return res.status(400).json({
          ok: false,
          error: 'That user does not exist.'
        })
      }

      const { age, hash, id, username } = user

      checkHash(hash, password)
        .then(ok => {
          if (!ok) {
            return res.status(403).json({
              ok: false,
              error: 'Password incorrect.'
            })
          }

          const token = getToken(id)

          return res.json({
            ok: true,
            user: { age, id, username },
            token
          })
        })
    })
    .catch(() => res.json({
      ok: false,
      error: 'An unknown error occurred.'
    }))
}

module.exports = router
