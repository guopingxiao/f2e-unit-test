// createModule.js
const getModuleId = require('./getModuleId')

module.exports = function createModule (name) {
  return {
    name,
    id: `${name}-${getModuleId.get(10000)}`
  }
}
