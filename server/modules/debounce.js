/**
 * 去抖函数
 * @param {*} fn
 * @param {*} waitTime
 */
module.exports = function debounce (fn, waitTime) {
  let timestamp = null
  let timer = null
  let context
  return function (...args) {
    timestamp = +new Date()
    context = this
    function later () {
      const last = (+new Date()) - timestamp
      if (last > 0 && last < waitTime) {
        clearTimeout(timer)
        timer = setTimeout(later, waitTime - last)
      } else {
        fn.call(context, ...args)
        clearTimeout(timer)
      }
    }
    if (!timer) {
      timer = setTimeout(later, waitTime)
    }
  }
}