const Hook = require('../modules/hook')

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

// 作者：Gping
// 链接：https://juejin.im/post/5b49b92751882536e51774bc
