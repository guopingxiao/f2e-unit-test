jest.mock('../modules/getNumber')
const getNumber = require('../modules/getNumber')
const createModule = require('../modules/createModule')

describe('test mock', function () {
  it('test', function () {
    getNumber.getRandom.__set(100)
    const module = createModule('module')
    expect(module.id).toBe('module-100')
  })
})

