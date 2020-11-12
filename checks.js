const { digest, cook } = require('node-web-server-with-stuff')
const dev = require(".")

module.exports = {
  async visitor(req, resp, { getData, users }) {
    const data = await getData()
    const user = users.find(user => user.login == data.login && user.pass == data.pass)

    if (user) {
      user.token = generateToken()
      resp.setHeader("set-cookie", cook("token", user.token))
      return "user"
    } else {
      return "guest"
    }
  },

  user(req, _, { users }) {
    const cookies = digest(req.headers.cookie)

    if (!cookies.token) return false

    if (users.find(user => user.token == cookies.token)) {
      return "user"
    } else {
      return false
    }
  },

  role(req, _, { users }) {
    const cookies = digest(req.headers.cookie)

    if (!cookies.token) return "guest"

    if (users.find(user => user.token == cookies.token)) {
      return "user"
    } else {
      return "guest"
    }
  },

  async giveup(req, resp, { users }) {
    const cookies = digest(req.headers.cookie)
    const user = users.find(user => user.token == cookies.token)

    if (user) {
      user.token = null
      resp.setHeader("set-cookie", cook("token", "", !dev, 1))
      return user.login
    } else {
      return "guest"
    }
  }
}

function generateToken() {
  let res = ''
  const chars = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'
  for (let i = 0; i < 32; i++) res += chars[Math.floor(Math.random() * chars.length)]
  return res
}