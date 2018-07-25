const fetchData = require('../modules/fetchData')

describe('=======test async =======', () => {
  test('test callback', (done) => {
    function callback(data) {
      expect(data).toBe('peanut buffer')
      done()
    }
    fetchData.fetchDataCallBack(callback);
  })
  test('test promise', () => {
    fetchData.fetchDataPromise().then(data => { 
      expect(data).toBe('peanut buffer');
    })
  })
  test('test async', async() => {
    let data = await fetchData.fetchDataAsync()
    expect(data).toBe('peanut buffer');
  })
})


// 作者：Gping
// 链接：https://juejin.im/post/5b49b92751882536e51774bc