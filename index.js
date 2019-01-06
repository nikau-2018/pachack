// WARNING TO FUTURE DEVS
//
// This repo contains a fairly hacky prototype (it was assembled at a hackathon, and later patched
// into a deployed demo). That's not to take away from it or its intent, but expect to find
// workarounds and plenty of untested code! It's not designed to be a long-lived product, rather to
// demonstrate an idea. We hope you find it useful.

require('dotenv').config()
const server = require('./server')

// Assume development mode (API hits over a proxy) unless PORT is set
const port = process.env.PORT || 3001

server.listen(port, () => {
  const upMessage = process.env.NODE_ENV === 'production'
    ? `Server listening on ${port} (and serving static files)`
    : `Server accepting API requests proxied to http://localhost:${port}`
  console.log(upMessage)
})
