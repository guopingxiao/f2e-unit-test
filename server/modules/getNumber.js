module.exports = {
  getRandom: (range) => {
    return Math.floor(Math.random() * range)
  },
  getDouble: (val, callback) => {
      if (val < 0) {
        return
      }
      setTimeout(() => {
        callback(2 * val)
      }, 1000)
  }
}
