const express = require('express')

const {checkHash, generateHash} = require('../auth/hash')
const {createUser, getUser} = require('../db/users')
const {getToken} = require('../auth/token')

const router = express.Router()

router.post('/signin', signIn)
router.post('/register', register)

function signIn (req, res) {
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

          return res.status(201).json({
            ok: true,
            user: { age, id, username },
            token
          })
        })
    })
    .catch(() => res.status(500).json({
      ok: false,
      error: 'An unknown error occurred.'
    }))
}

function register (req, res) {
  const {username, password, age} = req.body
  const hash = generateHash(password)
  createUser({username, hash, age})
    .then(() => res.status(201).json({ok: true,
      user: {
        username, age
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
