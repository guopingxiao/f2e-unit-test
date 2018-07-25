jest.mock('../../server/modules/getModuleId')

const getModuleId = require('../../server/modules/getModuleId')
const createModule = require('../../server/modules/createModule')

describe('test mock module', function () {
  it('test module file', () => {
    getModuleId._setId(100)
    const module = createModule('module')
    expect(module.id).toBe('module-100')
  })
  it('test module implementation', () => {
    getModuleId.mockImplementation(() => 100)
    const module = createModule('module')
    expect(module.id).toBe('module-100')
  })
  it('test complex implementation', () => {
    const myMockFn = jest
      .fn(() => 'default')
      .mockImplementationOnce(() => 'first call')
    console.log(myMockFn(), myMockFn(), myMockFn())
  })
})
