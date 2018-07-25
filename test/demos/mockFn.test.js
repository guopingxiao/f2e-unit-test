
const mockFn = jest.fn()
const getDouble = require('../../server/modules/getDouble')

describe('========= mock function ======', () => {
  test('test mock function', () => {
    getDouble(10, mockFn)
    expect(mockFn).not.toHaveBeenCalled()

    setTimeout(() => {
      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(mockFn).toHaveBeenCalledWith(20)
    }, 1100)
  })
  test('test mock return', () => {
    const myMock = jest.fn()
    myMock
    .mockReturnValueOnce(10)
    .mockReturnValueOnce('x')
    .mockReturnValue(true)

    console.log(myMock(), myMock(), myMock(), myMock())
  })
})
