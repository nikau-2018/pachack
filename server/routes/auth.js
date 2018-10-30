const express = require('express')
const verifyJwt = require('express-jwt')

const { checkHash } = require('../auth/hash')
const { createUser, getUser, getUserById } = require('../db/users')
const { getToken } = require('../auth/token')

const router = express.Router()

router.post('/signin', signIn)
router.post('/register', register)
router.get('/refreshuser', verifyJwt({ secret: process.env.JWT_SECRET }), refreshUser)

router.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    return res.status(403).json({ ok: false, error: 'Access denied.' })
  }

  if (err) {
    return res.status(500).json({ ok: false, error: 'Unknown error.' })
  }

  next()
})

function signIn (req, res) {
  const { username, password } = req.body

  getUser(username)
    .then(user => {
      if (!user) return userDoesNotExist(res)

      const { hash, ...userData } = user

      checkHash(hash, password)
        .then(ok => {
          if (!ok) return passwordIncorrect(res)

          return startSession(res, userData)
        })
    })
    .catch(() => unknownError(res))
}

function register (req, res) {
  const { username, password, age } = req.body
  createUser({ username, password, age })
    .then(([ id ]) => {
      startSession(res, { id, username, age })
    })
    .catch(error => {
      if (error.message.includes('UNIQUE constraint failed: users.username')) {
        return userExists(res)
      }

      unknownError(res)
    })
}

function refreshUser (req, res) {
  const { id } = req.user

  getUserById(id)
    .then(({ id, username, age }) => res.json({
      ok: true,
      user: { id, username, age }
    }))
    .catch(e => res.json({ ok: false, error: 'Failed to retrieve user.' }))
}

const userDoesNotExist = res =>
  res.status(400).json({
    ok: false,
    error: 'That user does not exist.'
  })

const userExists = res =>
  res.status(400).json({
    ok: false,
    error: 'That user already exists.'
  })

const passwordIncorrect = res =>
  res.status(403).json({
    ok: false,
    error: 'Password incorrect.'
  })

const startSession = (res, { age, id, username }) =>
  res.status(201).json({
    ok: true,
    user: { age, id, username },
    token: getToken(id)
  })

const unknownError = res =>
  res.status(500).json({
    ok: false,
    error: 'An unknown error occurred.'
  })

module.exports = router
