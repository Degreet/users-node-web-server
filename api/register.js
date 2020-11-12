module.exports = {
  POST: {
    access: 'guest', handler({ data }, { users }) {
      users.push(data)
      return { success: true }
    }
  }
}