module.exports = {
  any: {
    access: 'guest', handler({ data }, { users }) {
      if (!data.login) throw "login is not defined"
      const user = users.find(user => user.login == data.login)
      return { vacant: !user }
    }
  }
}