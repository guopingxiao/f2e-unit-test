let num = 0
function getRandom () {
  return num
}
getRandom.__set = function (_num) {
  num = _num
}

module.exports = {
  getRandom
}

