const fetchData = require('../modules/fetchData')

describe('=======test async =======', () => {
  test('test callback', (done) => {
    function callback (data) {
      expect(data).toBe('peanut buffer')
      done()
    }
    fetchData.fetchDataCallBack(callback)
  })
  test('test promise', () => {
    fetchData.fetchDataPromise().then(data => {
      expect(data).toBe('peanut buffer')
    })
  })
  test('test async', async() => {
    let data = await fetchData.fetchDataAsync()
    expect(data).toBe('peanut buffer')
  })
})
