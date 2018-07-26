
let id = 0
function getModuleId () {
  return id
}

getModuleId.get = (_id) => {
  id = _id
}

module.exports = getModuleId
