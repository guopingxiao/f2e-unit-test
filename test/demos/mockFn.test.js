
const mockFn = jest.fn()
const getNumber = require('../modules/getNumber')

describe('========= mock function ======', () => {
  test('test mock', () => {
    getNumber.getDouble(10, mockFn)
    expect(mockFn).not.toHaveBeenCalled()

    setTimeout(() => {
      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(mockFn).toHaveBeenCalledWith(20)
    }, 1100)
  })
  it('test api track', () => {

    const spy = jest.spyOn(getNumber, 'getRandom');

    getNumber.getRandom(1000);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(1000);

    spy.mockReset();
    spy.mockRestore();      // 恢复原有的方法

  })
  
})

