const Hook = require('../modules/hook')

beforeAll(() => console.log('1 - beforeAll'))
afterAll(() => console.log('1 - afterAll'))
beforeEach(() => console.log('1 - beforeEach'))
afterEach(() => console.log('1 - afterEach'))
test('test1', () => console.log('1 - test'))
describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'))
  afterAll(() => console.log('2 - afterAll'))
  beforeEach(() => console.log('2 - beforeEach'))
  afterEach(() => console.log('2 - afterEach'))
  test('test2', () => console.log('2 - test'))
})

describe('===== test hook =====', () => {
  const hook = new Hook()

  beforeEach(() => {
    hook.init()
  })

  test('test hook 1', () => {
    hook.a = 2
    hook.b = 2
    expect(hook.sum()).toBe(4)
  })

  test('test hook 2', () => {
    expect(hook.sum()).toBe(3)
  })
})
