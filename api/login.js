module.exports = {
  POST: {
    access: 'visitor', handler({ invoice }) {
      return { success: invoice == "user" }
    }
  }
}