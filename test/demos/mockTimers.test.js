const MockDate = require('mockdate')
const debounce = require('../modules/debounce')

describe('======= debounce function ====', () => {
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
