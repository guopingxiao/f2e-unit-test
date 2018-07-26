function getModuleId () {
}

getModuleId.get = function (range) {
  return Math.floor(Math.random() * range)
}

module.exports = getModuleId
