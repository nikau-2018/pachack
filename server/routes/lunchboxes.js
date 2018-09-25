const express = require('express')
const jwtVerify = require('express-jwt')

const {createLunchbox, getLunchbox} = require('../db/lunchboxes')

const router = express.Router()

router.use(jwtVerify({secret: process.env.JWT_SECRET}))
router.post('/', newLunchbox)

// Error handler
router.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(403).json({ok: false, message: 'Access denied.'})
  }

  if (err) {
    res.status(500).json({ok: false, error: 'Unknown error.'})
  }

  next()
})

function newLunchbox (req, res) {
  const {userId} = req.body
  createLunchbox(userId)
    .then((id) => getLunchbox(id[0]))
    .then((lunchbox) => res.status(201).json({
      ok: true,
      lunchbox
    }))
    .catch((err) => {
      res.status(500).json({
        ok: false,
        message: err.message
      })
    })
}

module.exports = router
