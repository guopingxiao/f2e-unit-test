module.exports = {
  getDouble: (val, callback) => {
    if (val < 0) {
      return
    }
    setTimeout(() => {
      callback(2 * val)
    }, 1000)
  }
}
