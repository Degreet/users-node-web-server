module.exports = {
  GET: {
    access: 'role', handler({ invoice }) {
      return { session: invoice != "guest" }
    }
  }
}