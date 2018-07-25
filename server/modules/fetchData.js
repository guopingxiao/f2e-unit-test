module.exports = {
  fetchDataCallBack: (callback) => { 
    setTimeout(() => {
        callback('peanut buffer')
    }, 1000)
  },
  fetchDataPromise: () => { 
    return new Promise((resolve) => { 
      setTimeout(() => {
        resolve('peanut buffer')
      }, 1000)
    })
  },
  fetchDataAsync: async () => { 
    return new Promise((resolve) => { 
      setTimeout(() => {
        resolve('peanut buffer')
      }, 1000)
    })
  }
}