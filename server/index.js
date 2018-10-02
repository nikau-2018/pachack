const express = require('express')
const path = require('path')

const auth = require('./routes/auth')
const foods = require('./routes/foods')
const lunchboxes = require('./routes/lunchboxes')
const users = require('./routes/users')

const server = express()

if (process.env.NODE_ENV === 'production') {
  // Check this path depending on where you want to serve from.
  server.use(express.static(path.join(__dirname, '..', 'public')))
}

server.use(express.json())
server.use('/api/v1/auth', auth)
server.use('/api/v1/foods', foods)
server.use('/api/v1/lunchboxes', lunchboxes)
server.use('/api/v1/users', users)

module.exports = server
// In production, serve any request not covered by the above as the built index
// from CRA's `yarn build` (for BrowserRouter)
if (process.env.NODE_ENV === 'production') {
  server.get('*', (req, res) => {
    res.sendfile(path.join(__dirname, '..', 'public/index.html'))
  })
}

module.exports = server
