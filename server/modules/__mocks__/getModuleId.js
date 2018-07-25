
let id = 0
function getModuleId () {
  return id
}

getModuleId._setId = (_id) => {
  id = _id
}

module.exports = {
  getModuleId
}
