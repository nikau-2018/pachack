const express = require('express')

const {createLunchbox, getLunchbox} = require('../db/lunchboxes')

const router = express.Router()

router.post('/', newLunchbox)

function newLunchbox (req, res) {
  const { userId } = req.body
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
