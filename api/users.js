module.exports = {
  GET: {
    access: 'user', handler(_, { users }) {
      return users
    }
  }
}