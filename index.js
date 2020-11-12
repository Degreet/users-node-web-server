const { server, up2 } = require('node-web-server-with-stuff')

const dev = !process.env.PORT
if (dev) require = up2(require)
module.exports = dev

const checks = require("./checks", dev)
const users = [{ name: "Administrator", login: "admin", pass: "ppp" }]
server.run({ checks, given: { users } })