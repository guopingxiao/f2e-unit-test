const MockDate = require('mockdate')

const getDouble = require('../modules/getDouble')
const debounce = require('../modules/debounce')

describe('=======getDouble module =======', () => {
  it('test timers', () => {
    jest.useFakeTimers()
    const mockFn = jest.fn()
    getDouble(10, mockFn)
    expect(mockFn).not.toHaveBeenCalled()
    jest.runAllTimers()
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith(20)
    jest.useRealTimers()
  })
})

describe('=======debounce function ====', () => {
  const fastforward = (time) => {
    let now = +new Date()
    now += time
    MockDate.set(now)
    jest.runTimersToTime(time)
  }

  it('should be called after 100 ms', () => {
    const mockFn = jest.fn()
    const run = debounce(mockFn, 100)

    jest.useFakeTimers()
    run()

    jest.runTimersToTime(50)   // 第 50 ms
    run()
    expect(mockFn).not.toHaveBeenCalled()

    jest.runTimersToTime(50)   // 第 100 ms
    expect(mockFn).not.toHaveBeenCalled()

    jest.runTimersToTime(50)   // 第 150 ms
    expect(mockFn).toHaveBeenCalledTimes(1)

    jest.useRealTimers()
  })

  it('should be called after 100 ms', () => {
    const mockFn = jest.fn()
    const run = debounce(mockFn, 100)

    jest.useFakeTimers()
    run()

    fastforward(50)   // 第 50 ms
    run()
    expect(mockFn).not.toHaveBeenCalled()

    fastforward(50)   // 第 100 ms
    expect(mockFn).not.toHaveBeenCalled()

    fastforward(50)   // 第 150 ms
    expect(mockFn).toHaveBeenCalledTimes(1)

    jest.useRealTimers()
    MockDate.reset()
  })
})
