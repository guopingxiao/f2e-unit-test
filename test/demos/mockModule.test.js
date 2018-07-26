jest.mock('../../server/modules/getModuleId')

const getModuleId = require('../../server/modules/getModuleId')
const createModule = require('../../server/modules/createModule')

describe('test mock module', function () {
  it('test module file', () => {
    let id = getModuleId.get(100)
    const module = createModule('module')
    expect(module.id).toBe('module-' + id)
  })
  it('test complex implementation', () => {
    const myMockFn = jest
      .fn(() => 'default')
      .mockImplementationOnce(() => 'first call')
    console.log(myMockFn(), myMockFn(), myMockFn())
  })
})
