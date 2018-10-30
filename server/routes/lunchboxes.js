const express = require('express')
const jwtVerify = require('express-jwt')

const { createLunchbox, getLunchbox, getUserLunchbox, storeFoodSelection } = require('../db/lunchboxes')

const router = express.Router()

router.use(jwtVerify({ secret: process.env.JWT_SECRET }))
router.post('/', getOrCreateLunchbox)
router.put('/:lunchboxId', chooseFood)

// Error handler
router.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    return res.status(403).json({ ok: false, message: 'Access denied.' })
  }

  if (err) {
    return res.status(500).json({ ok: false, error: 'Unknown error.' })
  }

  next()
})

function getOrCreateLunchbox (req, res) {
  const { userId } = req.body

  getUserLunchbox(userId)
    .then(lunchbox => {
      if (lunchbox) {
        return res.status(200).json({ ok: true, lunchbox })
      }
      return createLunchbox(userId)
    })
    .then(([ id ]) => getLunchbox(id))
    .then(lunchbox => res.status(201).json({ ok: true, lunchbox }))
    .catch(err => {
      res.status(500).json({
        ok: false,
        message: err.message
      })
    })
}

function chooseFood (req, res) {
  const lunchboxId = Number(req.params.lunchboxId)
  storeFoodSelection(lunchboxId, req.body)
    .then(res.status(200).json({ ok: true, message: 'lunchbox updated.' }))
    .catch((err) => {
      res.status(500).json({
        ok: false,
        message: err.message
      })
    })
}

module.exports = router
