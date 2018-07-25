describe('======= 测试断言 =======', () => {
  test('test equal', () => {
    expect(4 * 2).toBe(8) // ===
    expect({ bar: 'bar' }).toEqual({ bar: 'bar' }) // deep equal
    expect(1).not.toBe(2)
  })

  test('test boolean', () => {
    expect(1 === 2).toBeFalsy()
    expect(false).not.toBeTruthy()
  })

  test('test comapre', () => {
    expect(8).toBeGreaterThan(7)
    expect(7).toBeGreaterThanOrEqual(7)
    expect(6).toBeLessThan(7)
    expect(6).toBeLessThanOrEqual(6)
  })

  test('test Promise', () => {
    expect(Promise.resolve('problem')).resolves.toBe('problem')
    expect(Promise.reject('assign')).rejects.toBe('assign')
  })

  test('test contain', () => {
    expect(['apple', 'banana']).toContain('banana')
    expect([{name: 'Homer'}]).toContainEqual({name: 'Homer'})
  })

  test('test match', () => {
    expect('NBA').toMatch(/^NB/)
    expect({name: 'Homer', age: 45}).toMatchObject({name: 'Homer'})
  })
})

/** 支持自定义扩展 */
expect.extend({
  toBeEven (received) {
    const even = (received % 2 === 0)
    if (even) {
      return {
        message: () => (`expected ${received} not to be even Number`),
        pass: true
      }
    } else {
      return {
        message: () => (`expected ${received} to be even number`),
        pass: false
      }
    }
  }
})

describe('======= 扩展断言 =======', () => {
  test('test extend assert', () => {
    expect(10).toBeEven()
    expect(9).not.toBeEven()
  })
})
