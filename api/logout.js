module.exports = {
  GET: {
    access: 'giveup', handler({ invoice }) {
      return { success: invoice != "guest" }
    }
  }
}